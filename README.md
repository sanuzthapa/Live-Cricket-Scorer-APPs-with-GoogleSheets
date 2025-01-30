# 🏏 Live Cricket Scorer App with Google Sheets & Live Streaming Overlay

## 👋 Hi there, I'm **Sanuz Thapa**

### 🎓 Behavioral Economics & Data Science Student at UFC, Besançon

---

## 🔍 Project Overview

This project aims to create a **Cricket Scoring App** with a live overlay feature for streaming platforms such as **Prisma Live Studio**. It includes dynamic score updates, a user-friendly Google Sheets interface, and seamless integration for real-time broadcasting.

---

## 🚀 Features

- **User-Friendly GUI in Google Sheets**: Access the scorer interface from anywhere via Google Sheets.
- **Dynamic Calculations**: Simply input player names (batsmen & bowlers) and update scores live.
- **Ball-by-Ball Visualization**: Instant updates with live data tracking.
- **Broadcaster Messages**: Display live messages and announcements.
- **Live Score Calculation & Display**: Real-time calculations of match statistics for viewers.

---

## 📂 Table of Contents

1. [Introduction](#-introduction)
2. [Google Sheets Setup](#-google-sheets-setup)
3. [Implementation](#-implementation)
4. [Generating Live Links & Deployment](#-generating-live-links--deployment)
5. [Hosting on a Server](#-hosting-on-a-server)
6. [Integrating with Live Streaming](#-integrating-with-live-streaming)
7. [Adjustments & Settings](#-adjustments--settings)
8. [Going Live](#-going-live)
9. [Video Demo](#-video-demo)
10. [Conclusion](#-conclusion)

---

## 📚 1. Introduction

This project provides a **real-time cricket scoring solution** that integrates Google Sheets with live streaming platforms. The primary goal is to enable broadcasters and streamers to display live scores dynamically without needing additional software.<br>
link to googleSpreadsheet :<br>
https://docs.google.com/spreadsheets/d/1P8D53BJzG2f3YVobqROcemvLqAHApBPYY9wumSOQwiY/edit?gid=0#gid=0 <br>
link to Scoreboard Web page : <br>https://sanuzthapa.github.io/images/psplscore.html<br>
![ScoreBoard](https://github.com/sanuzthapa/Live-Cricket-Scorer-APPs-with-GoogleSheets/blob/main/resources/screenboard_preview.png)

---

## 📃 2. Google Sheets Setup

1. Create a **Google Sheet** with columns for: Batsmen, Bowlers, Runs, Wickets, Overs, and Extras.
2. Use built-in formulas for automatic calculations.
3. Enable **Google Apps Script** to create dynamic score updates.

![ScoreBoard](https://github.com/sanuzthapa/Live-Cricket-Scorer-APPs-with-GoogleSheets/blob/main/resources/ScorerGUI.png)

This is the scoreboard GUI with all the features dynamically controlled and calculated for the scorer in the backend.

---

## 💻 3. Implementation

- Click on **Extensions > Apps Script**

  ![AppScript](https://github.com/sanuzthapa/Live-Cricket-Scorer-APPs-with-GoogleSheets/blob/main/resources/appscript.png)
  
- A new window will load to deploy the scripts:

  ![AppScript Project](https://github.com/sanuzthapa/Live-Cricket-Scorer-APPs-with-GoogleSheets/blob/main/resources/AppScript_ProjectSection.png)

- Next, deploy the project and generate the deployment link.

---

## 💾 4. Generating Live Links & Deployment

![Deploy](https://github.com/sanuzthapa/Live-Cricket-Scorer-APPs-with-GoogleSheets/blob/main/resources/deployment1.png)

- **Deploy > New Deployment**
- Add name, description, and access permissions, then deploy and copy the link.

![Deploy2](https://github.com/sanuzthapa/Live-Cricket-Scorer-APPs-with-GoogleSheets/blob/main/resources/deployment2.png)

---

## 🛡️ 5. Hosting on a Server (Optional but Recommended)

- Use **free web hosting platforms** (e.g., GitHub Pages, Firebase, or any free hosting service).
- Ensure that the server fetches the live data from Google Sheets periodically.
- In my case, I used **GitHub Pages** ([Live Scoreboard](https://sanuzthapa.github.io/images/psplscore.html)) to host the scoreboard for later integration into Prisma/OBS for live streaming overlay.

---

## 🎥 6. Integrating with Live Streaming

![ScoreBoard](https://github.com/sanuzthapa/Live-Cricket-Scorer-APPs-with-GoogleSheets/blob/main/resources/screenboard_preview.png)

- In **Prisma Live Studio**, navigate to the live streaming section and add a new widget → **Web**.
  <div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/sanuzthapa/Live-Cricket-Scorer-APPs-with-GoogleSheets/blob/main/resources/fetch1.png" width="300" height="auto">
  <img src="https://github.com/sanuzthapa/Live-Cricket-Scorer-APPs-with-GoogleSheets/blob/main/resources/fetch2.png" width="300" height="auto">
</div>


- Fill in the details:
  - **URL**: The link generated (e.g., GitHub link)
  - **Title**: Any custom title for your overlay
<img src="https://github.com/sanuzthapa/Live-Cricket-Scorer-APPs-with-GoogleSheets/blob/main/resources/InsertValues.png" width="300" height="auto">
---

## 🔧 7. Adjustments & Settings

- Fine-tune fonts, colors, and positioning of overlays.
- Use **size adjustments** to fit the overlay properly on the stream.

---

## 📺 8. Going Live

- Start the **live match broadcast**.
- Verify that the **score overlay updates in real-time**.
- Troubleshoot any lags or errors in data fetching.

---

## 🎬 9. Video Demo

A complete video of the working project can be found here (via a recorded match from YouTube).
  <div style="display: flex; justify-content: space-between;">
  <img src="https://github.com/sanuzthapa/Live-Cricket-Scorer-APPs-with-GoogleSheets/blob/main/resources/livess1.png" width="350" height="auto">
  <img src="https://github.com/sanuzthapa/Live-Cricket-Scorer-APPs-with-GoogleSheets/blob/main/resources/livess2.png" width="350" height="auto">
  <img src="https://github.com/sanuzthapa/Live-Cricket-Scorer-APPs-with-GoogleSheets/blob/main/resources/livess3.png" width="350" height="auto">
</div>

---

## 📊 10. Conclusion

This project provides an efficient and cost-effective solution for live cricket scoring with real-time overlays. Using **Google Sheets, Google Apps Script, and streaming tools**, anyone can create a professional scoreboard without investing in expensive software.

---

## 🔧 Tools & Technologies

- **Languages**: JavaScript (Google Apps Script), HTML, CSS
- **Platforms**: Google Sheets, Prisma Live Studio, OBS Studio
- **Hosting**: GitHub Pages, Firebase, Free Web Hosting Services

---

## 💌 Connect with Me

- 📧 Email: [sanuzh.thapa@gmail.com](mailto:sanuzh.thapa@gmail.com)
- 🌐 LinkedIn: [Sanuz Thapa](https://linkedin.com/in/sanuz-thapa)
