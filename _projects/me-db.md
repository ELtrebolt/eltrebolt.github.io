---
title: "ME-DB"
date: 2023-08-10
last_modified_at: 2023-10-06
tagline: "Your Media Entertainment - Database"
excerpt: "MERN web app to organize your collection and to-do list of your favorite media"
toc: true
header:
    teaser: /assets/projects/ME-DB.jpg
    overlay_image: /assets/projects/ME-DB.jpg
    actions:
    - label: "Try It Out if Registered Beta Tester"
      url: "https://me-db.tech"
    - label: "Backend Github"
      url: "https://github.com/ELtrebolt/ME-DB-back"
    - label: "Frontend Github"
      url: "https://github.com/ELtrebolt/ME-DB-front"
sidebar:
  - title: "Project Type"
    text: "Website"
  - title: "Backend"
    text: "NodeJS"
  - title: "Web Framework"
    text: "ExpressJS"
  - title: "Frontend"
    text: "ReactJS"
  - title: "Libraries"
    text: "
    MongoDB: mongoose<br>
    Google Oauth2: PassportJS<br>
    Storing Data: Cookie-Session
    "
  - title: "Hosting (Free)"
    text: "Backend: Render.com<br>
    Frontend: Vercel.com"
priority: 1
---

## Product Pitch
- ME-DB is your perfect ***Media Entertainment Database*** to keep track of all of your favorite shows, movies, and games!
- Organize your media by ***tiers***, with your absolute favorites in S tier and your most regretted ones in F tier!
- Plan your ***To-Do List*** separate from your ***Collection***, filter media by tags, and customize to your liking!

## Motivations
- I love keeping track of all of my ***favorite media*** - before I created this project I actually had separate Google Docs where I'd list them out in pages and gave each a score on how much I liked it.
> I needed a better way to both record the data and visualize it, not in separate Google Docs but all in one application, accessible from anywhere!

At the same time, with all of the new content coming out nowadays, I wanted to condense a To-Do List across multiple platforms. Instead of keeping track of multiple Watch Lists on Netflix, Hulu, and the like, I could have one place that helps me decide what I most want to spend my time doing!
{: .notice--info}

## Disclaimer
- Although the URL is public, *sign-in is not permitted to everyone*, as I must first get Google’s permission to take data from any given user. I currently use this project along with 20 Beta Testers - thanks friends!
- Since this project is hosted on a ***Free Service (Render.com)***, it may take a minute or two for the website to load if the Service has not been active for a while. 

## Accomplishments
- Applied ***MERN stack*** to create a CRUD app that utilizes Google Oauth2 login with Passport JS and Cookie-Session
- Customized interface to display ***user-categorized rankings*** of tv shows with the ability to filter by year and tags
- ***Deployed online*** under custom subdomains using Render for the API backend and Vercel for the frontend


## Feature Highlights
- **Login Page** integrated with ***Google***
- **Home Page** w/ Collection & To-Do List
  - Create, Edit, and Delete media items
  - Filter by Year or Tag
- **Customization**
  - Tier Names
  - Tags