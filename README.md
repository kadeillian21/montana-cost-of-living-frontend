# Montana Cost-Of-Living Frontend

## Description:

The Montana Cost-Of-Living Frontend works hand-in-hand with the Montana Cost-Of-Living API. The frontend's job is to render the data that is stored and manipulated in the backend. The data from the backend gives the coordiantes for the markers on the Mapbox frontend map. The frontend has four major components at the moment: the Mapbox map that renders markers with popups for each city I have data on, the cities index action that shows a list of all the cities in the backend, the cities show action which shows one particular city to the user, and the cities edit action which allows an authorized user to edit a city. The frontend also has a login and logout link based on whether the current user is logged in or not.

The Mapbox map has custom styling that I applied to the map. The borders between countries and states are thicker to better demonstrate where Montana actually is. One of my biggest frustrations with mapping services is that at certain zoom levels, borders between states can barely be made out. I was able to remedy this situation with custom styling on the Mapbox website. I also made the green areas of the map even greener as I felt it was more aesthetic. Finally, I made the names of waterbodies stand out more by changing the font-color and the font-size. These changes are made to the default view when you access the application. In addition to these modifications, I also changed the Mapbox default popup to fit with my app's theme. One bug I would like to fix would be make sure that the popup always fits completely on the screen. At the moment, I have not been able to do so with Mapbox's technology.

The styling for the app is mostly done with Bootstrap classes, though I have added my own custom CSS in multiple places. The most notable examples of these are the "City Cards" in the index action and the cards that display more specific information about the city in the show action. The navbar is also a Bootstrap navbar. I used custom CSS to style things such as my show action image gallery, the background for the index and show actions, and for the card backgrounds.

## Project Status

The frontend portion of this app is currently only at the minimum viable product stage. I would like to have more coherent styling throughout the app. I would also like to fix the afformentioned bug where the popups do not always fit inside the map. Most of my work going forward will be on the backend API where I will add APIs to gather the data that I want for the city, fix a bug where images are not updated, and perhaps add a more secure way to authenticate users.

## Project Screen Shot(s)

<img src="https://i.postimg.cc/8PqpKXfX/Screen-Shot-2022-11-15-at-1-37-35-PM.png">

<img src="https://i.postimg.cc/0NrrhK2c/Screen-Shot-2022-11-15-at-1-39-47-PM.png">

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm run dev`

To Visit App:

`localhost:5173`

## Reflection

The MVP version of this app was built by me in about a week for my Actualize Bootcamp Capstone. I had been wanting to build a Montana COL app for months prior to this and I felt that building this app would make for a great capstone. I have always had a passion for maps and data that helps me make better decisions. This app combines both of those passions in addition to my love for coding and building new features.

The vast majority of my time was spent on building and desiging the frontend. The MVP API took me about a day's worth of work to make, but desigining and getting the various features of the frontend took me the next six days. Building an attractive, consistent design was one of my primary goals for the app, and while I am not finished with the design, I am proud of the point where it is at. The Mapbox API was difficult to work with at first, but once I understanded how to add markers to the map, the rest of the functionality fell right into place.

I have really enjoyed making this map app, and I will build more apps like this in the future!
