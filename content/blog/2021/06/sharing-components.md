---
title: Sharing Angular Components with Different Data Sources
date: 2021-03-07T11:39:35.377Z
slug: sharing-components
category: Technology
tags:
  - destiny-clan-dashboard
---
My Destiny clan admins use my [Destiny Clan Dashboard](https://destinyclandashboard.com) a lot to manage and view the current members. They needed a feature that would allow them to view prospective members.  I really liked the idea of having separate page for members outside of your current clan. There was one big problem approaching this.  All data is tied to an IndexedDB that is named off the clan.  All data for members get stored there so that we minimize requests and keep speed high. Everything is batched and it cleans up data on its own if a member leaves the clan.

I decided that I can just bite the bullet and not have any caching on prospective members. We don't want to risk a bloated extra DB.  The challenge ahead was  how to I avoid duplicate HTML Components and how do I point them to different data sources.  

I started by moving our existing player based components into a `shared` folder.  The player details section currently only has 3 components.

- player-details - this component acts as the wrapper component. It has a navigation and a `router-outlet` for the child components
- player-overview - this is a component that displays a bunch of general information about a player
- player-activity - this is a component that displays a heatmap of player activity.

I just needed to setup routes to point to these components.  The new separate routes look like this

```typescript
import { PlayerDetailsContainerComponent } from './player-details-container/player-details-container.component';
import { PlayerOverviewComponent } from '../shared/components/player/player-overview/player-overview.component';
import { PlayerActivityComponent } from '../shared/components/player/player-activity/player-activity.component';

const routes: Routes = [
  {
    path: ':memberId',
    component: PlayerDetailsContainerComponent,  // This is a master page styled component that displays the player-details component
    children: [
      {
        path: '',
        component: PlayerOverviewComponent
      },
      {
        path: 'activity',
        component: PlayerActivityComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule {}
```

We have shared components that are being used as pages.  Now let's look at how we get data into these components.  We're going to leverage some base level services to do this.



You can checkout my project at [https://destinyclandashboard.com/](https://destinyclandashboard.com/) or checkout my source code at [https://github.com/WorthyD/d2-clandashboard](https://github.com/WorthyD/d2-clandashboard)