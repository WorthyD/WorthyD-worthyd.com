---
title: Dashboard Progress Bars
date: 2021-05-02T22:33:54.957Z
dateModified: 2021-05-02T22:33:54.957Z
datePublished: 2021-05-02T22:33:54.957Z
slug: dashboard-progress-bars
category: Technology
tags:
  - destiny-clan-dashboard
  - angular
---

Progress has been pretty slow on the dashboard. I've been dedicating more of my off time to some wood working projects and my son wants more attention when going to bed.

I've been frustrated with the UI of the dashboard. We're doing a lot of processing behind the scenes and the user just knows it's loading. I've been wanting to add some sort of progress indicator. We have a loading indicator, but it doesn't show how far along we've gotten in the process. The app makes up to 1000 calls when loading activities.

I built out some state in NGRX for some generic notifications. I was going to leverage Material UI's Snackbar component, but I found out that's not the proper use for it. [Material Snackbar Use](https://material.io/components/snackbars). I thought about where to put the progress bar a lot. I decided to put it up at the very top of the screen. I'm going to add some animations to it and make it a smoother transition. It's a little jerky right now.

I trigger and updated progress stats inside of the NGRX Effects file. Member Profiles was pretty straight forward. We update the UI with new profiles as the batch progresses.

```ts
let progress = 0;
this.store.dispatch(
  addNotification({ notification: { id: 'memberProfile', data: { progress } } })
);

return this.profileService
  .getSerializedProfiles(clanId.toString(), clanMembers)
  .pipe(
    bufferTime(500, undefined, 20),
    mergeMap((members) => {
      progress += members.length;
      this.store.dispatch(
        updateNotification({
          notification: { id: 'memberProfile', data: { progress } },
        })
      );
      this.store.dispatch(
        memberProfileActions.loadMemberProfiles({ memberProfiles: members })
      );
      return members;
    }),
    toArray(),
    map((x) => {
      this.store.dispatch(
        removeNotification({
          notification: { id: 'memberProfile', data: { progress: 100 } },
        })
      );
      return memberProfileActions.loadMemberProfileSuccess();
    })
  );
```

Things were a little different with the activities. We process everything before updating the UI. Code inside the Effects file was pretty different. I decided to fire the updates with a callback. I probably could use an observable with it, but I was just ready to ship code.

```ts
// Initialize progress
this.store.dispatch(
  addNotification({
    notification: {
      id: 'memberActivity',
      data: { progress: 0 },
    },
  })
);

// Progress callback
const progress = (progressCount) => {
  this.store.dispatch(
    updateNotification({
      notification: {
        id: 'memberActivity',
        data: { progress: progressCount },
      },
    })
  );
};

// Start background process to refresh data
return this.memberActivityService
  .updateAllActivityCache(clanId, action.member, progress)
  .pipe(
    switchMap(() => {
      this.store.dispatch(
        removeNotification({
          notification: {
            id: 'memberActivity',
            data: { progress: 100 },
          },
        })
      );
      return this.memberActivityService.getAllActivitiesFromCache(
        clanId,
        action.member
      );
    })
  );
```

I've always struggled naming stuff. I called all the components around this feature a 'notification'. I realized after I got everything done, I should have just called these progress or loading components. Oh well, I'll fix it later... maybe...

I've had a hand full of requests to be able view an individual's player profile.  That screen is already hurting for info and I think I'm going to put some focus on it.  

Check up the updates at [https://destinyclandashboard.com/](https://destinyclandashboard.com/)