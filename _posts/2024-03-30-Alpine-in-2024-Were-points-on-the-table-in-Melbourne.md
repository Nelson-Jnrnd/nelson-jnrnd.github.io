---
layout: post
title:  "Alpine in 2024: Were points on the table in Melbourne ?"
date:   2024-03-30
desc: "Analysis of the Australian GP 2024 race of Alpine F1 Team"
keywords: "Alpine F1, F1 2024, Gasly, Ocon, Famin, Melbourne, Australia, Race, Motorsport"
categories: [Python]
tags: [F1 Analysis, Alpine, F1 2024, Race]
icon: icon-python
---
This Australian Grand Prix points were available for midfielders as Tsunoda, Hulkenberg and Magnussen scored when Verstappen, Hamilton and Russell retired. I’ll be analyzing the races of both Alpine drivers and try to determine if had things gone differently they could have been part of the scoring cars.

## Ocon's overcut

> *“I was in front of Kevin, fighting with Alex, in front of Nico as well, so we were going to be in the mix for those ninth, 10th, 11th positions. It was going to be a fun race but unfortunately cut short with that issue with the tear-off.”*
>
> \- **Esteban Ocon**

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/race/lap_5.png" class="responsive-img-medium">
</div>

Following the race start, the layout of the race looked something like this. Ocon was part of a 3 car pack with Magnussen and Albon. Hulkenberg on hards fell back from the DRS train with Gasly behind. On lap 6, Albon pitted triggering an early series of stops. Magnussen responded on the next lap but was undercut by Albon.

Alpine instead chose to overcut as they had a lot of pace in hand. Looking at the laps 6 to 8, Ocon set lap times 5 to 7 tenths quicker than Albon and Magnussen on fresh tires (respectively laps 8 to 10 and laps 9 to 11). Unfortunately a slower stop meant they lost most of the time gained on track against Albon. With a pit stop as fast as Williams’s, Ocon could have been able to keep the position at pit exit, effectively overcutting both.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/race/pit_seq_1.png" class="responsive-img-medium">
</div>

*The lap times without in/out laps mean the addition of laps between 5 and 11 without the in and out lap for each driver.*

## Gasly's strategy

> *“We tried with the strategy, tried to put ourselves in some stage of the race a decent position in case there is any red flag”*
>
> 
> \- **Pierre Gasly**

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/race/strategies.png" class="responsive-img-medium">
</div>

Next up, I'm trying to gather if the strategy the team opted with Gasly was better or worse than the regular medium → hard → hard. By pitting on lap 18 like Hulkenberg, Gasly did the longest stint on the mediums of all the midfield. Surprisingly, he managed to keep up with Hulkenberg on the hards as on lap 15 he was still within a 1 second before getting overtaken by the front-runner who pitted.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/race/lap_15.png" class="responsive-img-medium">
</div>

This strategy was in some way a hopping for a safety car between lap 10 and 20, which did happen on lap 17 as they pitted under the virtual safety car caused by Hamilton retiring. Unfortunately, the short length of the stoppage meant the race returned to green while Hulkenberg and Gasly were still in the pits, gaining less time than usual.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/race/pit_times.png" class="responsive-img-medium">
</div>

We can also notice the longer pit stop of Gasly, about 1.5 seconds slower than his direct competitor (and show how good Williams's stop was for Albon). This meant Gasly came out behind Zhou and 7 seconds behind Hulkenberg.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/race/lap_18.png" class="responsive-img-medium">
</div>

To estimate the time lost by the alternate strategy, the best comparison would be Hulkenberg and Magnussen, as Ocon did an unplanned pit stop on lap 17 to remove a tear-off stuck inside his brake duct we cannot use his data.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/race/gap_mag_hul.png" class="responsive-img-large">
</div>

1. Magnussen had about a 2 seconds lead when he pitted on lap 8.
2. Kmag came out about 18 seconds behind Hulkenberg and gained time with his fresher rubber.
3. Hulkenberg pitted under VSC on lap 18 which meant his pit stop costed only 12 seconds roughly. Which made it equivalent in terms of track position to Magnussen's strategy, although Hulk had now fresher tire to play with. Essentially, Hulkenberg and Gasly benefited from 8 laps fresher tire thanks to this strategy.

Interestingly Gasly really struggled to get his hards up to speed as he lost nearly 3 seconds in the laps following his pit stop. In the blue circles we can see Albon being right on the pace after pitting while Gasly in the pink circles lost time in the warm up phase.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/race/gap_GAS_ALB_1_54.png" class="responsive-img-large">
</div>

## Pace comparison

To compare both Alpine driver's pace, we can look at their stints on the hards as after's Ocon extra stop, they had a near identical strategy. There is a lot of impurity as the front-runners started lapping them in the middle of the race, but their pace was very close. With Gasly struggling on his warm up of his first set of hard and having generally less degradation. On the last stint Gasly had much better pace, but as Ocon was dead last and realistically out of the fight he might have slowed down on purpose.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/race/team_pace_label.png" class="responsive-img-large">
</div>

I'm once again comparing only the laps on the hards to better estimate the pace order of the cars. It's a bit hard to see as we're comparing a lot of drivers, but in race trim Gasly's Alpine was one of the quickest. In my opinion it’s quite misleading because of Gasly’s alternative strategy he was most of the time on a fresher tire.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/race/pace_comparison.png" class="responsive-img-large">
</div>

We can see this more clearly comparing the distance between Gasly and Magnussen on the traditional strategy. Because of the offset strategy, Gasly spent more laps with fresher tires (lap 19 to 33 and 43 to the end). The pace wasn’t terrible but the slow start of the stints for Gasly meant Magnussen gained more time in 7 or so laps than Gasly in 15.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/race/gap_mag_gas_strat.png" class="responsive-img-xlarge">
</div>

We can notice lap 38 to 40 where Alpine let Gasly out. Losing lots of time being overtaken by Stroll, Tsunoda and Hulkenberg instead of pitting, as they hoped of a safety car.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/race/lap_38.png" class="responsive-img-medium">
</div>

Ocon who was on a more regular strategy at the start, was matching Magnussen before his pitstop which is very positive for Alpine’s pace.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/race/gap_oco_mag_strat.png" class="responsive-img-xlarge">
</div>

1. Ocon matching and even pulling away from Magnussen after overcutting him.
2. Ocon did not struggle with warming up his hards, hard to say why, perhaps a difference in setup between both cars or struggles from Gasly.
3. Ocon gaining time on Magnussen after his extra pit stop with fresher rubber though.
4. Ocon slowing down on his last stint

## Conclusion

Gasly’s had little hopes of getting in the points considering his strategy did not pay off. His struggle on the warm-ups and the slow pit stop ended any chances of points for him. Ocon had a proper chance to at least fight for P10 with Albon and Magnussen if not for the tear off as the pace was promising. It’s impossible to know for sure how the pace would have looked throughout the hard stints, but the fight was on which is an improvement from the last 2 GP.