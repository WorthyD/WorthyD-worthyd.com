---
title: Angular Web Workers
date: 2021-09-26T11:39:35.377Z
slug: angular-web-workers
category: Technology
tags:
  - destiny-clan-dashboard
---

We currently run about 2000 web requests on a clean load. The app lightly locks up while it's pulling all this information and I really wanted to implement Web Workers into the project to try to offload processing to another processing thread.

There are very few resources to implement web workers into an angular application. I found all the examples to add web workers to the project, but injecting Angular Services into the web worker can't be found anywhere. I did find a really good library for handling observables with web workers.

I have written a library that handles all the Bungie requests. I couldn't use these because they are so tight into the Angular framework.

I isolated the worker logic into a service that I could control and inject as needed. Web workers must be apart of the root application within a project. I can't be apart of a library.

```ts
import { Injectable } from '@angular/core';
import { MemberProfile, ClanMember } from 'bungie-models';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileWorkerService {
  constructor() {}

  loadProfiles(
    clanId: string,
    clanMembers: ClanMember[],
    progress?: (done) => any
  ): void {
    const worker = new Worker(new URL('./profile.worker', import.meta.url));
    const members: BehaviorSubject<MemberProfile[]> = new BehaviorSubject([]);
    worker.onmessage = ({ data }) => {
      if (data.type === 'progress') {
        progress(data.data);
      } else if (data.type === 'complete') {
        this.members.next(data.data);
      }
    };

    worker.postMessage({
      clanId,
      clanMembers,
      apiKey: environment.bungieAPI, // Web worked doesn't have access to our environment config
    });

    return members;
  }
}
```

Service Usage

```ts
  const progress = (progressCount) => {
    // Update progress indicator
   };
  this.profileWorkerService.loadProfiles(clanId.toString(), clanMembers, progress).pipe(
    filter((x) => x.length > 0),
    map((x) => {
      // Do stuff with results
    })
  );
```

Finally the web worker file itself

```ts
import { ClanDatabase } from 'projects/data/src/lib/clan-db/ClanDatabase';
import { ProfileService } from 'projects/data/src/lib/clan-db/profiles/profile.service';
import { take } from 'rxjs/operators';

addEventListener('message', ({ data }) => {
  // Our indexeddb browser storage
  const clanDatabase = new ClanDatabase();  

  // This was once an injectable service, but we've removed all angular stuff from it and only
  // use fetch for the web request
  const profileService = new ProfileService(clanDatabase, data.apiKey); 

  const progress = (progressData) => {
    postMessage({ type: 'progress', data: progressData });
  };

  profileService
    .getSerializedProfilesWithProgress(data.clanId, data.clanMembers, progress)
    .pipe(take(1))
    .subscribe((x) => {
      postMessage({ type: 'complete', data: x });
    });
});

```

It took me a lot of sporadic time spent on the enhancement.  I spent a lot of time digging into this and I'm glad to finally have it implemented.  Stuff doesn't load any faster, but it doesn't lok up like it used to. 

You can checkout my project at [https://destinyclandashboard.com/](https://destinyclandashboard.com/) or checkout my source code at [https://github.com/WorthyD/d2-clandashboard](https://github.com/WorthyD/d2-clandashboard)
