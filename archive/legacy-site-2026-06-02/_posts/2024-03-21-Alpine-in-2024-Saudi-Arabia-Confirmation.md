---
layout: post
title:  "Alpine in 2024: Saudi Arabia, Confirmation"
date:   2024-03-21
desc: "Analysis of the Saudi Arabian GP 2024 weekend of Alpine F1 Team"
keywords: "Alpine F1, F1 2024, A524, Harman, Gasly, Ocon, Famin, Saudi Arabia, Motorsport"
categories: [Python]
tags: [F1 Analysis, Alpine, F1 2024]
icon: icon-python
---
After the difficult weekend of Bahrain, the team headed to Jeddah. This was an interesting weekend as it was the first time we saw the A524 on a different track.

# Qualifying pace

[The conclusions I made from last weekend]({% post_url 2024-03-07-Alpine-in-2024-Bahrain-Rock-Bottom %}) were that the car is struggling on low speed sections from its overweight chassis and lack of mechanical grip. The team communicated that the car lacked in traction, but it was difficult to see in the data, we’ll see if this is more apparent on this circuit. However, it was decent in the high speed sections of sector 2, we’ll see if this confirms itself this week.

<div class="image-container">
    <img src="{{ site.img_path }}/saudi_arabia_2024/qualifying/q1_gaps.png" class="responsive-img-medium">
</div>

Alpine is now 3 tenths away from the next team which seems to be more than Bahrain. We will dive into how that happened by first looking at the laps of both Alpine drivers. They were incredibly close with only 0.004s separating them, but there is more to it.

<div class="image-container">
    <img src="{{ site.img_path }}/saudi_arabia_2024/qualifying/trackmap.png" class="responsive-img-large">
</div>

<div class="image-container">
    <img src="{{ site.img_path }}/saudi_arabia_2024/qualifying/q1_ocon_gasly_2.png" class="responsive-img-xlarge">
</div>

--> Looking at the telemetry there is a clear difference in setup as Ocon is consistently quicker on the straights and Gasly is able to carry more speed into the corners.

--> Ocon loses big chunks of time in the high speed turn 4, 13 and 22. Summing up to about 4 tenths. Most of the time is gained back slowly on the straights.

--> Running higher downforce Gasly would be expected to gain time in the first and last corner, but he struggled with sliding on exit as he explained on his post qualifying interview.

For the comparison with the other teams I displayed under the gap to Ocon and Gasly as they both used a very different setup.

<div class="image-container">
    <img src="{{ site.img_path }}/saudi_arabia_2024/qualifying/q1_gaps_sector_percent_ocon.png" class="responsive-img-medium">
    <img src="{{ site.img_path }}/saudi_arabia_2024/qualifying/q1_gaps_sector_percent_gasly.png" class="responsive-img-medium">
</div>

Overall, we paint a similar picture as Bahrain with the car being closer to the pack in high speed (Sector 2) and struggling in the lower speed sections (Sector 1). For the telemetry analysis I’m using Ocon’s data, as his top speed was more in line with other teams.

<div class="image-container">
    <img src="{{ site.img_path }}/saudi_arabia_2024/qualifying/top_speed.png" class="responsive-img">
</div>

As you can see below, most of the time is lost in the turn 1 section. Under breaking compared to Haas, on traction compared to RB and Sauber or both for Williams.

<div class="image-container">
    <img src="{{ site.img_path }}/saudi_arabia_2024/qualifying/telemetry_s1.png" class="responsive-img-xlarge">
</div>

In the high speed turns of sector 2, the car either gain time or is equal to other bottom fielders. The lower downforce Ocon and Hulkenberg are running is helping in this section but there is notable performance in turn 15-16 that is not drag related.

<div class="image-container">
    <img src="{{ site.img_path }}/saudi_arabia_2024/qualifying/telemetry_s2.png" class="responsive-img-xlarge">
</div>

In sector 3 though, Ocon has to brake harder and lose time on all teams; except Haas because of they have a similar aero setup (Although Hulkenberg chose to brake later, keeping up with the others in entry but losing more time on exit). Once again in the last corner Ocon has to brake very early to have a decent exit.

<div class="image-container">
    <img src="{{ site.img_path }}/saudi_arabia_2024/qualifying/telemetry_s3.png" class="responsive-img-xlarge">
</div>

Pace wise, this confirms the issues revealed by the drivers and Bruno Famin last week. The car is struggling on traction, and they have to compromise under braking because of it. On other part of the track, they are more in line with the very tight midfield.

# Tire strategy

In free practice, both drivers followed an identical run plan. Short one laps run on medium and softs followed by longer stints on mediums for practice 1 and 2. Practice 3 being reserved for low fuel qualifying runs.

<div class="image-container">
    <img src="{{ site.img_path }}/saudi_arabia_2024/free_practice/p1_comparison.png" class="responsive-img">
    <img src="{{ site.img_path }}/saudi_arabia_2024/free_practice/p2_comparison.png" class="responsive-img">
    <img src="{{ site.img_path }}/saudi_arabia_2024/free_practice/p3_comparison.png" class="responsive-img">
</div>

An interesting fact of the weekend is that Alpine did not try the hards at all during the practices. This is quite unusual as the expected fastest strategy heading into the weekend is medium → hard.

<div class="image-container">
    <img src="{{ site.img_path }}/saudi_arabia_2024/free_practice/compounds.png" class="responsive-img-medium">
</div>

They might have been looking to test different setups on the same tire to have more data or perhaps the strategist were banking on a stoppage happening later in the race. Prioritizing a longer stint on the medium, waiting to pit for soft under safety car/ red flag.

<div class="image-container">
    <img src="{{ site.img_path }}/saudi_arabia_2024/race/strategies.png" class="responsive-img">
</div>

Unfortunately, a safety car on lap 7 compromised that strategy and forced Alpine onto a long stint on the untested hard tire.

I will not further analyse the race pace as Magnussen's train and Gasly's DNF make the data pretty pointless.