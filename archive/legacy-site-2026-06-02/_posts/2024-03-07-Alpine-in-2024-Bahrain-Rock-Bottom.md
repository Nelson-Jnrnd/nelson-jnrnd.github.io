---
layout: post
title:  "Alpine in 2024: Bahrain, Rock Bottom"
date:   2024-03-07
desc: "Analysis of the Bahrain 2024 weekend of Alpine F1 Team"
keywords: "Alpine F1, F1 2024, A524, Harman, Gasly, Ocon, Famin, Bahrain, Motorsport"
categories: [Python]
tags: [F1 Analysis, Alpine, F1 2024]
icon: icon-python
---
Hey everyone, I'm a bit late with the Saudi weekend already starting, but I’m analyzing in depth the Bahrain weekend of Alpine. To try to gather insights into the French Team performance.

# Free Practice

As the first weekend starts, it’s a cold shower for the team in blue. The performance of the car is not here, as announced, but the reality still hurts.

The practice run-plan by Alpine was in line with the other teams, mostly focusing on soft and medium tires. As you can see in the following graph, only Red Bull used the hards.

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/fp_tires.png" class="responsive-img-large">
</div>

Lots of short outings at the start of every session as the team dial in setups, but this is usual. The most important session during the Bahrain Grand Prix is FP2 as it takes place in the evening, in the conditions the most similar to those of qualifying and the race.

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/fp_stint_len.png" class="responsive-img-large">
</div>

The bigger the circle, the more stint was made of that length. As such, Alpine focused less on long runs than Haas, Mercedes or RB but so did other teams.

There’s not a lot we can take out from free practice, the teams having spent already 3 full days testing on this track they already have plenty of data on the configuration.

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/fp_2_long_runs.png" class="responsive-img-large">
</div>

What we can do is compare the long runs that took place in the practice. I won't do any deep analysis as I’m late posting this and the race already took place, but it’s clear Alpine has the slowest car going into the weekend.

> *“We need to work on our speed over one lap but on the long runs we are closer to the others.”*
>
> \- **Esteban Ocon**

# Qualifying

P19 and P20… locking out the back row of the grid, there couldn’t be a worse start of the season for the team. Where and how much are they losing on one lap pace is what I’ll be looking at in this section.

Firstly I’ll compare the performance of **Ocon** and **Gasly** :
* Ocon : 1:30.793
* Gasly : 1:30.948

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/q_inner.png" class="responsive-img-large">
</div>

I won't analyze in depth the laps as they were quite close in performance with only about 0.15 seconds of difference. I’m using it more as a guarantee that the lap will we use to represent Alpine in the following section is mistake-free and representative of the car’s pace.

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/q_inner_speed.png" class="responsive-img-large">
</div>

The first thing we notice is a slight over speed for Ocon (worth only barely 0.05s) going into the first corner as he got a very light tow from Albon.

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/q_inner_t1.png" class="responsive-img">
</div>

There’s little to take from the middle sectors as both drivers traded blows equally, but we can confirm, looking at speed on the straights and the overall performance in corners, that both setups shared similar aero drag.

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/q_inner_s2.png" class="responsive-img-large">
</div>

It’s in the last sector that Ocon gained about 2 tenths on his teammate. Keeping higher minimum speed into T13 and higher entry speed into the last corner. The brake shapes being relatively similar, I’m making the hypothesis that due to Gasly’s rushed out lap his tires were overheating (It’s impossible to know for sure from publicly available data).

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/q_inner_s3.png" class="responsive-img-large">
    <img src="{{ site.img_path }}/bahrain_2024/q_inner_brake_s3.png" class="responsive-img-large">
</div>

From now on I’ll use Ocon’s lap when comparing the performance of the team to their rivals. We’ll first have an overlook of Alpine’s sector times compared to the field before diving into telemetry analysis of their direct rivals.

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/q_gaps.png" class="responsive-img">
</div>

First off, let’s look at the gap around a complete lap. Keep in mind these times are from the end of Q1 meaning the front-runners like Ferrari and Red Bull were not pushing 100%. Alpine’s gap to Ferrari is less than a second, which is the gap they had to in Bahrain last year. Essentially, it isn’t as much Alpine losing pace as it’s the others bottom teams making gains. Sauber and Alpine look to be the back runners although the gap to the front of the midfield (Williams) is only 0.5 seconds away.

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/q_sectors_percent.png" class="responsive-img-large">
</div>

Surprisingly, even with its overweight chassis, which would cost them most in the sinuous sections, the second sector is the only sector where the A524 is not slowest.

In Bahrain, the first and last sector are mostly straight sections. The difference being that sector 1 contains slower corners in turn 1 and 4 while sector 3 has the fast turn 13 and quite fast turn 14. Looking at the performance, Alpine’s gap was smallest in S3. We could derive from this that Alpine is decent (or rather less bad) in high speed corners.

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/trackmap.png" class="responsive-img-large">
</div>

Gasly responded “It's not as much. It's not as bad as you mentioned” when Jolyon Palmer mentioned the rumors of the A524 being 11 kg overweight. A known decent approximation for the cost of weight on an F1 car is about 0.03 seconds for every 1 kg of extra weight. Taking a guess we can imagine the car to be only 7-8 kg overweight which would bring a loss in lap time of 2 tenths. Considering the closeness of the field this would bring the Alpine right in the fight of the midfield.

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/q_telemetry_1.png" class="responsive-img-large">
</div>

For clarity’s sake we’ll analyze the telemetry of only the closest 4 team to Alpine: RB, Williams, Haas and Sauber. The first noticeable point is that the time lost in sector 1 comes in the braking zone of T1. Ocon has to break earlier than Haas or Williams and harder than Sauber and RB. This causes Ocon to effectively be about 5 m “late” under breaking causing a loss of up to 5 tenths. On the other hand, the car looks decent on traction, regaining some lost time. Turn 4 is the same but less exacerbated, Alpine is first on the brake and caries less speed in the corner causing further loss of time (except Haas but looking at the dip in speed on exit it is likely due to over-steer).

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/q_telemetry_2.png" class="responsive-img-large">
</div>

Finally, a good corner ! In the high speed esses of 5, 6 and 7 the Alpine has the highest minimum speed regaining up to 2 tenths on the competition. The slow and downhill turns 8 and 9 are more of the same, with Alpine losing time on the brakes. (We can note how crazy good the RB is in this section, gaining nearly 0.7 s in 2 corners !)

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/q_telemetry_3.png" class="responsive-img-large">
</div>

All cars seem to be pretty equal in the fasts turn 11, 12, 13 (with a big loss of time for Haas due to Hulkenberg locking up). One interesting thing of note is that on the last two straights Alpine is losing time, about a tenth. But on the first two straights of the lap they weren’t. Which makes me wonder if it’s due to the way they use the battery over the lap.

To sum up, the car seems to struggle under breaking and in slow sections perhaps as it lacks mechanical grip, on the other hand it looks decent in high speed sections meaning the car has pretty good downforce. The top speed also doesn’t look too bad around one lap; but of course we don't know how much less downforce Alpine could afford because of the weaker engine.

> *"The car doesn’t react how I would like it to, but we have to do with what we have."*
>
> \- **Pierre Gasly**

> *"It's a general lack of performance. Too little driveability. The handling is not good. It's a bit of everything. You'd expect the car to be terrible to drive, but it's not."*
>
> \- **Bruno Famin**

# Race

Now the race. To improve clarity I’ll once again only consider Alpine’s direct competitor, the other bottom 4 teams. To have comparable data, we’ll first look at the strategies employed by each of the team. For each team I picked the driver with the most “usual” race. Meaning I discarded Bottas, Hulkenberg and Sargeant because of their incidents during the race.

As you can see in the following graph, the strategy employed on those cars were soft, hard, hard. (Except Gasly making an extra stop). Which is good news for us as it will make comparing pace much easier.

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/r_strategy.png" class="responsive-img">
</div>

To start off, we can look at the race of both Alpine’s drivers. It’s clear that Esteban Ocon struggled heavily in the second stint on hards. With inconsistencies and an overall pace slower by 2 tenths. The third stint was closer, but the difference in strategy make comparison impossible. For these reasons I will focus on the two first stints of Gasly as they represent the pace of the car better.

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/r_inner.png" class="responsive-img">
</div>

Stints during the race are inconsistent because of fighting and other incidents but global take away is that Alpine is closer to the pack in race pace particularly on the harder tire but still behind. Another point would be that they seem to have much higher degradation than their competitors. Something that we could already see in the preseason tests as I pointed in my previous <a href="https://nelson-jnrnd.github.io/python/2024/02/25/Alpine-in-2024-A-Fresh-but-Rough-Start.html">post</a>.

<div class="image-container">
    <img src="{{ site.img_path }}/bahrain_2024/r_comparison.png" class="responsive-img">
</div>

# Moving forward

The Saudi Arabian Grand Prix is coming fast and the team will not have time to upgrade the car as confirmed by Famin.

> *“We're going to work, we've got a few days but there won't be any evolutions on the car. We have a lot to learn about the car, things to fine-tune, because even though we've tried to optimize the car, there are still things to do on the set-up. But there won't be any revolution and we need to work step by step.”* 
> 
> \- **Bruno Famin**

But looking at their performance in high speed corners and as said by Esteban Ocon, Saudi Arabia should fit their car better than Bahrain :

> *“Jeddha should be a track that fit our car better. So we hope it will work out better there than here (in Bahrain)”* 
> 
> \- **Esteban Ocon**