---
title: New Charts D3 to ApexCharts
cover: 
coverAlt: ""
description: ""
datePublished: 2021-07-22T11:39:35.377Z
dateModified: 2021-07-22T11:39:35.377Z
category: Technology
tags:
  - destiny-clan-dashboard
---

### Current Chart Situation

I've been using [D3.js](https://d3js.org/) charts for a while on [Destiny Clan Dashboard](https://destinyclandashboard.com).  I use it for my basic bar charts and an advanced heatmap that displays a player's activity for the duration of Destiny 2.  

I put in a lot of work to get these charts up and running, but I was never really 100% happy with them.  I had to write the animations, make them responsive, and theme them to the site.  

### Problems

My responsive code was wonky at best.  I never figured it out, but it would randomly throw 300 console errors when resizing the window. I couldn't consistently re-create the issue.

D3.js is also really heavy on the size.  I an a module analyzer and D3.js took up a lot more space than the other modules in my project.  I probably could have done some tree shaking and slimmed it down.  I just didn't feel like it.

### An Alternative

On a whim, I decided to try out [Apex Charts](https://apexcharts.com/).  They had an Angular library and I thought I could easily implement it.  The library has all the charts I need with a lot of behavior and visuals I want.  I normally avoid chart libraries like this when it comes to client work.  They can be hard to 100% customize to match what has been designed and may not include all the behaviors you want.

### Implementation

#### Bar Chart

I have about 8 different bar charts in the application. I've abstracted the graph component enough that they all use one of two chart components.  We have a basic activity time for a date chart and a spark line chart.  My spark line chart is a super slimmed down chart that is used in data tables.

Implementation was straight forward.  I had to rename a few properties on my dataset and that was it. The chart was up and running very quickly.

#### Heat Map

My heat map has a lot of work put into it.  D3 would draw out the grid and add a border around the months.  It was a really good tool for this.

ApexCharts heat maps handle data very differently for their heat maps. Heat maps are essentially a table with cell shading.

D3.js's dataset needed to be in sequential order. 

```ts
const dataSet = [
    {
        date: '1/1/1900',
        seconds: 222222
    },
    {
        date: '1/2/1900',
        seconds: 333333 
    },
    // ETC..
]
```

Apex Required something totally different. It didn't have a way to wrap lines for new years.  I split the data sets out by year and created one chart for each year. 


##### Grouping by week

I also had to group data by the day of the week and what week it belonged to. This wasn't too hard using JavaScript's Date `.getDay()` method.  I will eventually want to go back and performance test it. There are a lot of nested loops.


```ts
const dataSet = [
    {
        name: 'Sunday',
        data:[ 
            {
                x: 'w1',
                y:11111
            },
            {
                x:'w2',
                y:2222
            }
        ]
    },
    {
        name: 'Monday',
        data:[ 
            {
                x: 'w1',
                y:11111
            },
            {
                x:'w2',
                y:2222
            }
        ]
    },


]
```

##### 52.142 weeks a year

Another problem was I needed to get full weeks. Jan 1 doesn't always land on a Sunday and Dec 31st doesn't always.  Before calculating, everything I need to find the Sunday before Jan 1 and Saturday after Dec 31st. This was pretty straight forward.

```ts
// Remember Months are zero based index
 const startDate = new Date(yearIndex, 0, 1);

 // Get previous sunday
 const startDateAdjusted = new Date(startDate.setDate(startDate.getDate() - startDate.getDay()));

const endDate = new Date(yearIndex, 11, 31);

// Get next saturday
const endDateAdjusted = new Date(endDate.setDate(endDate.getDate() - endDate.getDay() + 6));
```


##### The final challenge

The last challenge had to do with presenting appropriate tool tips.  Hovering over a cell should display the Date and the total playtime for the day. Apex does a lot of work for you by automatically grouping the x and y info in the tool tip. Well this is worthless in our instance.  `w1: 132323` isn't helpful at all.  

I had to write a custom solution that stored all the data in a variable and look it up by what year, day and week.

```ts

// This function fires every on every pixel move. We use the lastKey variable to only look up data when the hovered cell changes
  toolTip({ series, seriesIndex, dataPointIndex, w }) {
    const key = `${seriesIndex}-${dataPointIndex}-${w.config.title.text}`;

    if (this.lastKey !== key) {
      this.lastKey = key;
      this.lastData = this.lookupData(seriesIndex, dataPointIndex, w.config.title.text);
    }

    return `<div class="p-1">
       <div>Date: ${formatDate(this.lastData.date)}</div>
       <div>Time: ${this.formatPipe.transform(this.lastData.y)}</div>
       </div>`;
  }
```

There were several other challenges with this build, but nothing worth writing home about.  I continue to put in about 5 hours a week into the tool and I'm really motivated to keep momentum going.

Next steps are to re-work the seal displays.  I have no idea how to find out if a seal has been guilded. I also want to learn how to leverage Web Workers to increase the overall performance.  

You can checkout my project at [https://destinyclandashboard.com/](https://destinyclandashboard.com/) or checkout my source code at [https://github.com/WorthyD/d2-clandashboard](https://github.com/WorthyD/d2-clandashboard)