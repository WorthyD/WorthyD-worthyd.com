---
title: Sharing Angular Components with Different Data Sources
date: 2021-03-07T11:39:35.377Z
slug: sharing-components
category: Technology
tags:
  - destiny-clan-dashboard
---

My Destiny clan admins use my [Destiny Clan Dashboard](https://destinyclandashboard.com) a lot to manage and view the current members. They needed a feature that would allow them to view prospective members. I really liked the idea of having separate page for members outside of your current clan. There was one big problem approaching this. All data is tied to an IndexedDB that is named off the clan. All data for members get stored there so that we minimize requests and keep speed high. Everything is batched and it cleans up data on its own if a member leaves the clan.

I decided that I can just bite the bullet and not have any caching on prospective members. We don't want to risk a bloated extra DB. The challenge ahead was how to I avoid duplicate HTML Components and how do I point them to different data sources.

Our end product should look something like this:

```ts

src
├── clan 
│   ├── begin-with-the-crazy-ideas.textile
│   └── on-simplicity-in-technology.markdown
├── player
│   ├── footer.html
│   └── header.html
└── shared
     ├── default.html
     └── post.html


```

I started by moving our existing player based components into a `shared` folder. The player details section currently only has 3 components.

- player-details - this component acts as the wrapper component. It has a navigation and a `router-outlet` for the child components
- player-overview - this is a component that displays a bunch of general information about a player
- player-activity - this is a component that displays a heatmap of player activity.

I just needed to setup routes to point to these components. The new separate routes look like this

```typescript
import { PlayerDetailsContainerComponent } from './player-details-container/player-details-container.component';
import { PlayerOverviewComponent } from '../shared/components/player/player-overview/player-overview.component';
import { PlayerActivityComponent } from '../shared/components/player/player-activity/player-activity.component';

const routes: Routes = [
  {
    path: ':memberId',
    component: PlayerDetailsContainerComponent, // This is a master page styled component that displays the player-details component
    children: [
      {
        path: '',
        component: PlayerOverviewComponent, // Component in the shared folder
      },
      {
        path: 'activity',
        component: PlayerActivityComponent, // Component in the shared folder
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule {}
```

We have shared components that are being used as pages. Now let's look at how we get data into these components. We're going to leverage some base level services to do this.

The base service looks like this. It serves as a base class and will be replaced via dependency injection.

```ts
@Injectable()
export class PlayerService {
  constructor() {}
  memberIdSource$: BehaviorSubject<string>;
  memberId$: Observable<string>;
  memberProfile$: Observable<MemberProfile>;
  seasonPass$: Observable<ClanMemberSeasonPassProgression>;
  characters$: Observable<DestinyEntitiesCharactersDestinyCharacterComponent[]>;
  memberSnapShot$: Observable<Callout[]>;
}
```

Our component injects and directly references out service. This allows us to manipulate all external data points.

```ts
@Component({
  selector: 'app-player-overview',
  templateUrl: './player-overview.component.html',
  styleUrls: ['./player-overview.component.scss']
})
export class PlayerOverviewComponent implements OnInit {
  constructor(private playerService: PlayerService) {}

  memberId = this.playerService.memberId$;
  memberProfile$ = this.playerService.memberProfile$;
  seasonPass$ = this.playerService.seasonPass$;
  characters$ = this.playerService.characters$;

  ngOnInit(): void {
  }
}
```

The built out Player service looks like this.  We inject services or our RXJS state to retrieve the data.

```ts
@Injectable()
export class PlayerService extends BasePlayerService {
  private profileComponents = [100, 104, 200, 202, 900];
  constructor(private d2Service: Destiny2Service, private decimalPipe: DecimalPipe) {
    super();
  }

  memberIdSource$: BehaviorSubject<string> = new BehaviorSubject('');
  memberId$ = this.memberIdSource.asObservable();

  memberProfile$ = this.memberId.pipe(
    filter((x) => !!x),
    switchMap((x) => {
      const memberType = x.split('-')[0];
      const memberId = x.split('-')[1];

      return return this.d2Service
        .destiny2GetProfile(profileId,platformId, this.profileComponents)
        .pipe(
          map((memberProfileResponse) => {
            return memberProfileResponse.Response;
          })
      );    
    }),
    shareReplay(1)
  );

```

We have all this nonsense above, but how do we orchestrate the dependency injection swap?

```ts
import { PlayerService } from './player.service';
import { PlayerService as BasePlayerService } from '../shared/components/player/player.service';

@NgModule({
  declarations: [PlayerDetailsContainerComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    DecimalPipe,
    PlayerService,
    {
      provide: BasePlayerService,
      useExisting: PlayerService
    },
    
  ]
})
export class PlayerModule {}
```

There is a lot to this and it took a lot of smashing my head on my desk to figure it out.  

I'm pretty happy with the outcome and it was worth the stress.

You can checkout my profile page here: [https://destinyclandashboard.com/player/3-4611686018467238913](https://destinyclandashboard.com/player/3-4611686018467238913)

You can checkout my project at [https://destinyclandashboard.com/](https://destinyclandashboard.com/) or checkout my source code at [https://github.com/WorthyD/d2-clandashboard](https://github.com/WorthyD/d2-clandashboard)
