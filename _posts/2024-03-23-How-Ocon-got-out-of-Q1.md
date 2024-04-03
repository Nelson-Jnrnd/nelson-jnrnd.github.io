---
layout: post
title:  "How Ocon got out of Q1 - Australia 2024"
date:   2024-03-23
desc: "Analysis of the qualifying session of Esteban Ocon and Pierre Gasly at the Melbourne GP 2024"
keywords: "Alpine F1, F1 2024, Gasly, Ocon, Famin, Melbourne, Australia, Qualifying, Motorsport"
categories: [Python]
tags: [F1 Analysis, Alpine, F1 2024, Qualifying]
icon: icon-python
---
For the first time this season an Alpine got into Q2. And listening at the reaction of Ocon it seems to be quite an achievement. In this post I'll be comparing the laps of both Alpine drivers to determine where and how the time was gained.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<tbody>
  <tr>
    <td class="tg-0pky">Ocon</td>
    <td class="tg-0pky">78.659</td>
    <td class="tg-0pky">78.217</td>
    <td class="tg-0pky">77.617</td>
  </tr>
  <tr>
    <td class="tg-0pky">Gasly</td>
    <td class="tg-0pky">78.554</td>
    <td class="tg-0pky">77.982</td>
    <td class="tg-0pky">78.088</td>
  </tr>
</tbody>
</table>

Both drivers did 3 laps, and while Pierre was the fastest during most of the session, it was the last run that mattered. Ocon improved his time by nearly 8 tenths while Gasly got slower.

### Trackmap
<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/qualifying/track_map.jp2" class="responsive-img-large">
</div>
---
<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/qualifying/internal_delta.png" class="responsive-img-large">
</div>



## Where time was gained / lost

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/qualifying/turn_3.png" class="responsive-img-large">
</div>

Down to turn 3, Ocon braked much later carrying more speed into the corner gaining two tenths. Interesting to notes different techniques between the two drivers as Gasly let the car roll at the apex while Ocon keeps applying the brakes all the way through.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/qualifying/turn_9.png" class="responsive-img-large">
</div>

The fast turn 9/10 is where Gasly lost another good bit of time, braking much earlier than Ocon losing about two tenths once more.

## Different driving styles

Both drivers were very closely matched in the final sector, but I think it illustrates perfectly a difference in driving style.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/qualifying/turn_11.png" class="responsive-img-large">
</div>

Turn 11 both drivers have a different approach with Gasly choosing to slow the car more and accelerate right at the apex. While Ocon carried more speed but couldn’t accelerate as soon without running too wide on the exit.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/qualifying/turn_12.png" class="responsive-img-large">
</div>

In the last three corners the difference is even more pronounced with Ocon often trail-braking into corners and being “smoother” overall with the brakes while Gasly prefers to brake as hard as possible and settle the car early in the corner, rotate and be on the throttle earlier.

## Shifting issues

At the end of qualifying Pierre noted that he could not improve in his last attempt as he couldn't downshift in turn 1 and 6. <a href="https://www.formula1.com/en/latest/video.frustrated-gasly-reveals-gearbox-issue-hit-on-the-lap-that-mattered-in-q1.1794294481057411877.html">Source</a>

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/qualifying/turn_1.png" class="responsive-img-large">
</div>

We’re working with incomplete information, as the brake pedal pressure is not publicly available. But looking at the speed trace, Ocon braked earlier and longer yet carried more speed into the corner. From this we can derive that he had to be more gentle on the brakes. There’s not any visible gear issues in the data as Gasly downshifted for when it's expected for his braking point though this might not be representative of what Pierre felt in the car.

<div class="image-container">
    <img src="{{ site.img_path }}/australia_2024/qualifying/turn_6.png" class="responsive-img-large">
</div>

I’m a bit puzzled about Gasly’s comment on turn 6 as he barely lost 0.01 second and I don’t see any shift problems, but perhaps the data doesn’t record attempted shifts.

Overall looks like an extraordinary lap by Ocon as he couldn't reproduce his time in Q2. With data available it's difficult to understand how big Pierre's issues were and how it impacted him. Although most of time lost doesn't look to be related to shifting issues it could very well have been caused by a loss in confidence in the car.