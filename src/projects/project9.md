---
title: "TV hode"
tags: projects
layout: project-template.html
themes:
  - Elektronikk
  - Fusion360
  - Mikrokontroller
  - WorkInProgress
---

![Fusion design av TV hode](/assets/images/Projects/TVHead/FrameFusion.png)

Prosjekt der jeg har lyst til å lage et TV hode.

<div class="split"></div>

<div class="section-box">

<div class="text-section">

Jeg har et pågående prosjekt der jeg har lyst til å lage et TV hode som jeg kan ha på meg.

Jeg ble inspirert til å lage det etter å ha sett på videoer som [Minbitt sin video](https://www.youtube.com/watch?v=yEIA7uc1x5s&t=383s) der hun lager et kult TV hode.

</div>

<div class="image-section">

![Minbitt TV hode](/assets/images/Projects/TVHead/MinbittHead.png)

</div>

</div>

<div class="section-box">

<div class="image-section">

![Fusion design av TV hode](/assets/images/Projects/TVHead/FrameFusion.png)

</div>

<div class="text-section">

Jeg har laget selve TV hode flere ganger i fusion, men har ikke enda printet noe på grunn av at jeg vi få alle de elektroniske delene til å fungere sammen for å vite hva de trenger av fester slik at jeg kan implimentere det inn i modellen.

</div>

</div>

<div class="section-box">

<div class="text-section">

Den elektroniske delen av prosjektet er en [64 x 64 led matrix](https://www.aliexpress.com/item/1005005720691780.html?spm=a2g0o.order_list.order_list_main.9.1ab01802UfTOCU) som skal brukes som skjermen. Den styres av en [ESP32-Trinity](https://www.makerfabs.com/esp32-trinity.html), som er en ESP32 mikrokontroller som er designet for å plugge inn i og kontrollere en led matrix skjerm.

<div class="spacer"></div>

Jeg har fått skjermen til å vise en gif jeg har laget på repeat. Planen er å få den til å vise et fjes, og endre ansiktsutrykk basert på enten en kontroller med knapper, eller en sensor av noe slag. Jeg har også lyst til å få den til å animere snakking når den plukker opp lyd fra [mikrofonen](https://www.aliexpress.com/item/1005004019287254.html?spm=a2g0o.order_detail.order_detail_item.2.219df19c4NbXtu) jeg skal installere, likt som i [Minbitt sin video](https://www.youtube.com/watch?v=yEIA7uc1x5s&t=383s).

</div>

<div class="image-section">

![Skjerm](/assets/images/Projects/TVHead/ScreenHeartbeat.jpg)

</div>

</div>

<div class="section-box">

<div class="image-section">

![Xiao ESP32S3 Sense](/assets/images/Projects/TVHead/XiaoESP32S3Sense.jpg)

</div>

<div class="text-section">

Delen jeg har hatt mest trøbbel med er å kunne se noe mens jeg har hode på. Der har jeg kjøpt en [Seeed studio Xiao ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html) som jeg skal bruke som kamera, og den skal sende en live feed fra kamera til en [Waveshare 1.28inch LCD module](https://www.waveshare.com/1.28inch-LCD-Module.htm).

Jeg har hatt mye trøbbel med å få Xiaoen til å kontrollere waveshare skjermen. Det er ganske mye dokumentasjon på hvordan få skjermen til å fungere med en vanlig ESP32, men siden Xiaoen har [få koblingspunkter og alle er miltifunksjonelle](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#hardware-overview) så har det vært vanskelig å få den til å styre skjermen slik dokumentasjonen sier. Jeg har fått skjermen til å fungere med en arduino uno ved å følge [waveshare sin dokumentasjon](https://www.waveshare.com/wiki/1.28inch_LCD_Module) og [denne youtube videoen](https://dronebotworkshop.com/gc9a01/) av DroneBot Workshop.

</div>

</div>