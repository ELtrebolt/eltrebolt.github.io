---
title: "Spotify-Statys"
excerpt: "Python web app to see stats about your created playlists"
toc: true
header:
    teaser: /assets/projects/Spotify-Statys.jpg
    overlay_image: /assets/projects/Spotify-Statys.jpg
    actions:
    - label: "Try It Out"
      url: "https://spotify-statys.herokuapp.com"
    - label: "Github Repo"
      url: "https://github.com/ELtrebolt/2021-spotify-statys"
author: Ethan Lee
sidebar:
  - title: "Project Type"
    text: "Website"
  - title: "Backend"
    text: "Python"
  - title: "Web Framework"
    text: "Flask"
  - title: "Frontend"
    text: "HTML / CSS"
  - title: "Libraries"
    text: "
    Dataframes: Pandas<br>
    API: Spotipy<br>
    Storing Data: Pickle<br>
    Visualization: Plotly"
  - title: "Hosting (Paid)"
    text: "Web Server: Gunicorn<br>
    Host: Heroku"
---

## Disclaimer
- Although the URL is public, sign-in is not permitted to everyone, as I must first get Spotify's permission to take data from any given user. I currently use this project along with 20 Beta Testers - thanks friends!

## Highlights 
- Built a web application using the Python-Flask framework integrated and hosted with Heroku
- Implemented dynamic querying through the Spotify API based on the user’s created playlists
- Visualized insights with over 30 unique Plotly figures including bar charts, timelines, and box plots
  
- **Demo 1:** Features 5 Pages = Home, About Me, Currently Playing, Top 50, Search (Artists/Playlists)

<iframe width="560" height="315" src="https://github.com/ELtrebolt/2021-spotify-statys/assets/44250460/ed9e9a98-9688-417c-bbf8-f735e8062f7f" frameborder="0" allowfullscreen></iframe>

- **Demo 2:** Currently Playing, Temporary Window Caching, Individual User Session Data
    - See stats of any song that's in any of your playlists!
    - Best when you're jamming to one of your own playlists, but also works if you're adding songs to a queue or listening to someone else's playlist.
    - If you close the window without logging out, you will have some time to reload the page without having to sign in and collect your data again
    - Others cannot access your data even if you forget to sign out

<iframe width="560" height="315" src="https://github.com/ELtrebolt/2021-spotify-statys/assets/44250460/00ebe70e-50d4-4933-a8a8-78be41a0c7e2" frameborder="0" allowfullscreen></iframe>

## Updates
- **Known Bugs**
    1. If any of your Top 50 Songs or Artists do not have songs in any of your playlists, they will not be shown in the graphs.
    2. Today's Date = a day ahead sometimes
- **Future Features**
    1. Collect Liked Songs and Include in All Graphs
    2. Search Autocomplete
    3. Styling
    4. Mobile Responsiveness

## Features List
- **Home Page**
    - **On This Date**
        - What songs did you add to which playlists a year ago today?
        - What playlists did you create on this date?
        - What artists did you add to a playlist for the first time on this date?
    - Timeline of Adding Songs to Playlists
    - Most Recent Songs Added to Playlists
    - **Library Totals**
        - Across 59 playlists, I've added 5738 songs
        - My playlists have 3383 unique songs, 2359 unique albums, and 1870 unique artists
- **About Me Page**
    - Top Genres by Followed Artists
    - Top Playlists by Number of Top 50 Songs In Them
    - Top Playlists by Number of Top 10 Artists' Songs
    - Top 10 Most Common Songs / Albums / Artists by Count in All Playlists
- **Currently Playing Page**
    - Song / Artist Rank in Top 50
    - Song Features vs. AVG Song from Playlist, All Playlists, & Artist
    - Percentile of Song Audio Features by Playlist, All Playlists, & Artist
    - Timeline of When SONG Was Added to Playlists
    - Timeline of When Songs Were Added to Playlist
    - Most Common Playlists For Artist
    - Most Common Songs For Artist
    - Artist Genres
    - Percentage of Songs With Same Genres As Artist in Playlist
    - Percentage of Songs With Same Genres As Artist Across All Playlists
- **Top 50 Page - Across 3 Time Periods**
    - Audio Features & Boxplot of Top 50 Songs
    - AVG Audio Features & Boxplot of Top 50 Artists' Songs From Your Playlists
    - Most Common Genres & Top 5 Songs Per Genre Across Top 50 Songs
    - Most Common Genres & Top 5 Artists Per Genre Across Top 50 Artists
- **Search Page**
    - **Analyze Artist**
        - Timeline of When Songs Were Added to Playlists
        - Top 50 Rankings
        - Most Common Playlists For Artist
        - Most Common Songs For Artist
        - Audio Features of Artist's Songs
        - Playlists With Artist's Genres
    - **Analyze Playlist**
        - Timeline of When Songs Were Added to Playlist
        - Most Common Genres For Playlist
        - Most Common Artists For Playlist
        - Most Common Albums For Playlist
        - Audio Features & Boxplot of Songs in Playlist
        - Most Similar Playlists By Songs Shared
    - **Compare Artists**
        - Timeline of When Songs Were Added to Playlists
        - Genres Venn Diagram
    - **Compare Playlists**
        - Audio Features of Songs Which Intersect Playlists
        - Timeline of When Songs Were Added to Playlists
        - Most Shared Genres Between Playlists