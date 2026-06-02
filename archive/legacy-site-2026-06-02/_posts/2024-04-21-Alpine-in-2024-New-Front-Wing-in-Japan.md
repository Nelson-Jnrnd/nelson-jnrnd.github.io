---
layout: post
title:  "Alpine in 2024: New Front Wing in Japan"
date:   2024-04-21
desc: "Analysis of the Japanese GP 2024 qualifying of Alpine F1 Team"
keywords: "Alpine F1, F1 2024, Gasly, Ocon, Famin, Suzuka, Japan, Qualifying, Motorsport"
categories: [Python]
tags: [F1 Analysis, Alpine, F1 2024, Qualifying]
icon: icon-python
---

<div class="image-container">
    <img src="{{ site.img_path }}/japan_2024/trackmap.png" class="responsive-img-large">
</div>

In Japan, Alpine unveiled their first significant upgrade for the A524—a new front wing aimed at reducing the car’s weight. Ahead of the weekend, Pierre Gasly highlighted the upgrade will be minor from a performance standpoint.

> *“We don’t expect it to be major – we know it’s not going to bring us where we want to be but it’s a first step in the right direction, so definitely looking forward to see what it brings.”*
>
> \- **Pierre Gasly**  

# Qualifying

For the second consecutive race, an Alpine car progressed beyond Q1, with Esteban Ocon clinching 15th place. This post delves into Q1, focusing on how Ocon managed to outqualify Gasly for the fourth time.

<div class="image-container">
    <img src="{{ site.img_path }}/japan_2024/q1_gaps_drivers.png" class="responsive-img-medium">
</div>

The Q1 session showed significant inter-team variations, as the five eliminated drivers hailed from distinct teams, suggesting that driver performance played a key role. A notable three-tenths gap emerged between the Alpine teammates, in the following graph we can see where that difference was made.

<div class="image-container">
    <img src="{{ site.img_path }}/japan_2024/internal_delta.png" class="responsive-img-large">
</div>

The time difference between them remained marginal until the last sector, where Ocon made significant gains from Turn 14 to 130R, and again in the final chicane.

<div class="image-container">
    <img src="{{ site.img_path }}/japan_2024/turn_14.png" class="responsive-img-large">
</div>
At the exit of Turn 14, Gasly corrected a severe slide, delaying throttle application and losing time down to the last corner. In the last chicane, although he managed to maintain control, he had to modulate the throttle to preserve rear traction, losing additional time.

<div class="image-container">
    <img src="{{ site.img_path }}/japan_2024/turn_18.png" class="responsive-img-large">
</div>

The start of the lap being very close between both drivers, it looks like the rears on Gasly’s cars overheat causing traction issue at the end of the lap. This seems to be a recurring issue from Pierre’s side of the garage as they already suffered from it in Saudi Arabia.

<div class="image-container">
    <video autoplay loop muted class="responsive-img-large">
        <source src="{{ site.img_path }}/japan_2024/gasly_snap_suzuka.mov" type="video/mp4">
    </video>
</div>

## Alpine Upgrades

<div class="image-container">
    <img src="{{ site.img_path }}/japan_2024/q2_improvements.png" class="responsive-img-small">
</div>

Next, I will compare the car’s performance against other teams to gauge the upgrade's effectiveness. Since Ocon did not improve from Q1 to Q2, it seems he might have reached the car's potential in Q1, unlike other drivers who improved.

<div class="image-container">
    <img src="{{ site.img_path }}/japan_2024/q2_gaps_sector_percent.png" class="responsive-img-medium">
</div>

Looking at where the time was lost, Alpine actually holds its own in the fast flowing esses of sector 1, as we’ve noticed at Saudi Arabia and in the fast turns 5, 6, 7 in Bahrain where Alpine already was amongst the quickest (of the back markers). It’s in the third sector where Alpine is loses big amounts to everyone.

<div class="image-container">
    <img src="{{ site.img_path }}/japan_2024/telemetry_s1_annoted.png" class="responsive-img-large">
</div>

Quite a few insights we can take from the first turns. First off, there’s quite a big difference in top speed between the teams with Alpine sitting in the middle. Haas and Williams opting for lower downforce they gain up to nearly a tenth on the straight but lose a big amount of time in the turns. Interestingly contrary to Williams and Haas, it’s not in the esses but in the last corner, turn 6 that Alpine loses time.

<div class="image-container">
    <img src="{{ site.img_path }}/japan_2024/telemetry_s2_annoted.png" class="responsive-img-large">
</div>

In sector 2, Alpine has lower speed through the double right of 8 and 9. The more weekend goes by the clearer that Alpine struggles in mid to lower speed corners where traction plays a big role. In the hairpin they actually hold their own compared to RB and Sauber but lost time on Haas and Williams as they both braked later and had better traction out of the turn. Lastly, in the high speed section of 13 and 14 Alpine is decent, although we can notice very good performance from RB.

<div class="image-container">
    <img src="{{ site.img_path }}/japan_2024/telemetry_s3_annoted.png" class="responsive-img-large">
</div>

In the final chicane, Alpine lost an additional tenth, braking earlier than all teams except Williams. This underscores their challenges with low-speed direction changes and possibly overheating issues as well. Gasly faced clear difficulties with overheating rear tires. While Ocon may have coped slightly better, he still experienced some of the same issues. This could explain the disparity in performance between Turn 10, where they were reasonably competitive, and Turn 16, where their performance significantly dropped off—similar to Williams, who also reported struggles with overheating tires during qualifying.

# Conclusion
Despite the upgrade the characteristics of the car remains the same with struggles on traction hindering their performance in low to medium speed turns. Their relative good performance in the high speed sections seems to remain stable as well. Even though the team reached Q2, we'll have to wait for further upgrades to see the team challenge properly the midfield.