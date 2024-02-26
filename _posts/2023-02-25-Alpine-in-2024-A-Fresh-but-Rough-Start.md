---
layout: post
title:  "Alpine in 2024: A Fresh but Rough Start"
date:   2024-02-25
desc: "Analysis of the preseason 2024 of Alpine F1 Team"
keywords: "Alpine F1, F1 2024, A524, Harman, Gasly, Ocon, Famin, Preseason, Testing, Motorsport"
categories: [Python]
tags: [F1 Analysis, Alpine, F1 2024]
icon: icon-python
---
Hey everyone, F1 is starting next week, and I’m analyzing how the winter and the 3 days of testing went for Alpine. I went over most of the interviews of the off season to paint a general idea of how the team is feeling ahead of the first race.

## Postmortem of the 2023 season

It’s no secret that last year was a disappointment with the team being leapfrogged by both McLaren and Aston Martin. The reason was a car that was difficult to upgrade :

> *“I think we had a great year [in 2022], that year, I think every time we touched the development of the car, we put load, and we took a lot of weight off the car as well. So there was there was a lot of performance to be had.”*
>
> *“We knew we weren't quite where we wanted to be this year, we knew that our developments were plateauing a little bit on the car, because of limitations that we had.”*
> 
> \- **Matt Harman**

The A523's Achilles' heel was its narrow operational window, leading to a season of inconsistent results :

> *“It’s not because it’s difficult to set up, it’s because the window is so narrow – so you’re having to make compromises. It’s tricky. You go to a circuit where ride is important to the driver – and we can’t put the car there because of the performance loss.”*
>
> \- **Matt Harman**

## What changed ?

Amidst the departures of big management figures Alpine is changing everything on the A524 as the main objectives are to improve both performance window and upgradeability.

> *“The A524? We have learned on the aero side, on the tire usage side, tyre performance, tyre degradation. That we have learned. And we decided to go for something which looks better, and let’s see on the track if it will be better or not.”*
>
> \- **Bruno Famin**

You might remember the huge cooling vents that appeared on some track last year. This was another area of performance looked at by the team.

> *“One of the things that you can't see is underneath the bodywork, and under there is what we call the internal bodywork. This allows us to control all the mass flow through the car, from the beginning, as it enters into the sidepod, all the way through to the rear. That allows us to make sure that we optimise the cooling behaviour of the car.”*
> 
> *“We were a little bit more open than we'd like to have been last year. This year, we are in a much better position. That reduces the drag of the car and allows us to have an optimal lap time."*
>
> \- **Matt Harman**

## Objectives going into this year

Both drivers and directors hints at future struggles.

> *"We have a new concept, the car is totally new, and when you do that you normally take a step back. I don't say that this is the case, because we haven't put the car down yet. But the plan is to improve it through the year and get more progress, the more that we go through the laps. It's going to be crucial to get a good feedback straight away, to know where we have to improve, to see if the concept choices that we took are the right ones. It's not necessarily that crucial where we start, but it's going to be where we are mid-season."*
>
> \- **Esteban Ocon**

Bruno Famin seems more conservative than his predecessor Rossi and take 2024 as a fresh start.

> *“We are not going to set any expectation in terms of results, positions. A good 2024 season will be first to see a good improvement in the way we work all together at the factory, to be able to unleash the creativity, to extract more from our talented people, all the talented people we have in Enstone and in Viry.”* 
> 
> \- **Bruno Famin**

All of this is very negative but Gasly is still optimist about the dynamic shift.

> *"I can see the mentality in the team. I can see the spirit, I can see the recruitment. I see where we're heading as a race team. We are making the right steps."*
> 
> *"Obviously, it's not that straightforward in F1 when you come with a completely new concept, it might not provide all the rewards you expect from the beginning."*
> 
> *"You've just got to be open-minded about it. But looking at the others, we get inspired by what they're doing. There are definitely a couple of stories from last season, which definitely brings hope and motivation to the entire team."* 
> 
> \- **Pierre Gasly**

## Preseason testing

Alpine focused mainly on C1 and C3 tires, respectively the hards and the softs for next week’s Bahrain Grand Prix. It’s the only team bar McLaren that did not bring any tires softer than C3. This seems to be an intent of reducing the amount of variables during the test. And be ready to extract the most usable data out of the Grand Prix weekend as possible.

<div class="image-container">
    <img src="{{ site.img_path }}/preseason_2023/tire_selection.jpeg" class="responsive-img-large">
</div>
As you can see on the following graphs the team mostly did very short runs perhaps as they experimented with the setup. Each strings of dots represent a stint (ignoring in and out laps) you can identify that the team pitted if two dots are not linked.

For example Gasly's first and second outings in practice 1 were 2 laps long on the hard tire. The y-axis shows us that the second laps were more than 10 seconds slower suggesting a fast lap - cool lap run. This trend continued for the first 28 laps in which he entered the pits 9 times. It's only on its 10th outing that Pierre Gasly did 4 consecutive laps at full pace.

<div class="image-container">
  <img src="{{ site.img_path }}/preseason_2023/day_1_gasly.png" class="responsive-img">
  <img src="{{ site.img_path }}/preseason_2023/day_2_gasly.png" class="responsive-img">
  <img src="{{ site.img_path }}/preseason_2023/day_3_gasly.png" class="responsive-img">
  <img src="{{ site.img_path }}/preseason_2023/day_1_ocon.png" class="responsive-img">
  <img src="{{ site.img_path }}/preseason_2023/day_2_ocon.png" class="responsive-img">
  <img src="{{ site.img_path }}/preseason_2023/day_3_ocon.png" class="responsive-img">
</div>

Contrary to other teams, Alpine never did a run longer than 10 laps, which makes comparing lap time more difficult as there is more uncertainty around the amount of fuel in the car. Regardless I compared all of Alpine’s “long” stints to those of other teams (on the same day and same compound to reduce variables).

While looking at those graph, keep in mind that some teams stints were longer, meaning Alpine could have had less fuel in the car which would be a bias in favor of Alpine.

<div class="image-container">
    <img src="{{ site.img_path }}/preseason_2023/c1_c2.png" class="responsive-img-large">
</div>
Lap times in testing are to be taken with a grain of salt of course, as you can see Ferrari and Sauber being quicker than Red Bull on C1 long runs. But looking at the data Alpine seem to have higher degradation compared to other teams, especially compared to their overall performance on those stints. On the hard tire, most teams had minimal degradation, as the car burned through fuel weight their lap time stayed constant or even improved. This is not the case with the A524 who lost about 0.8s in lap time after only 8 laps. This of course could be related to their run plan, battery usage or other reasons, so this information is not to be taken out of context.

Alpine's degradation on the softer tire was more in line with the other teams, except Red Bull and Aston Martin, which is not surprising as both teams were very kind on their tires last year. (We can note that Haas could well have improved their tire degradation, an issue they have been managing for quite a few seasons).
<div class="image-container">
    <img src="{{ site.img_path }}/preseason_2023/day_3_c3.png" class="responsive-img-large">
</div>

What I think we can take out is that Alpine's test were more focused on exploration than optimization as they probably tested many setup configurations. Performance wise, the pace between teams is too close to tell as the midfield will be tight for sure, but it looks like Alpine will be fighting at the back of it instead of at the front as they used to.

## First impressions after the tests

The sentiment is confirmed at the end of the tests by Gasly.

> *"It's not going to be an easy first race, we're not going to start from where we would have liked.”*
> 
> *"The good thing is we've identified very clearly what we've got to work on as a team. Now, whether we're able to fix it with car setup or not, for the first few races of the season, time will tell, but for sure there'll be an aggressive plan of upgrades which we will need to close the gap.”*
> 
> *"It has been very clear with Esteban, we had very similar feedback straight away."* 
>
> *"But I think we'll have to be patient, even if it's not what we like as drivers, but clearly it might take some time before we really unlock the performance we want from that car.”* 
> 
> \- **Pierre Gasly**

The team is bracing for a tough start of the season, but a good thing is that they identified the areas of improvement.

What did you take away from this test ? Do you think Alpine will be able to leap up the grid during the season like McLaren ?