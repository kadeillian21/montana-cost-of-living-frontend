# Montana Cost-Of-Living Frontend

### Description:

The Montana Cost-Of-Living Frontend works hand-in-hand with the Montana Cost-Of-Living API. The frontend's job is to render the data that is stored and manipulated in the backend. The data from the backend gives the coordiantes for the markers on the Mapbox frontend map. The frontend has four major components at the moment: the Mapbox map that renders markers with popups for each city I have data on, the cities index action that shows a list of all the cities in the backend, the cities show action which shows one particular city to the user, and the cities edit action which allows an authorized user to edit a city. The frontend also has a login and logout link based on whether the current user is logged in or not.

The Mapbox map has custom styling that I applied to the map. The borders between countries and states are thicker to better demonstrate where Montana actually is. One of my biggest frustrations with mapping services is that at certain zoom levels, borders between states can barely be made out. I was able to remedy this situation with custom styling on the Mapbox website. I also made the green areas of the map even greener as I felt it was more aesthetic. Finally, I made the names of waterbodies stand out more by changing the font-color and the font-size. These changes are made to the default view when you access the application. In addition to these modifications, I also changed the Mapbox default popup to fit with my app's theme. One bug I would like to fix would be make sure that the popup always fits completely on the screen. At the moment, I have not been able to do so with Mapbox's technology.

The styling for the app is mostly done with Bootstrap classes, though I have added my own custom CSS in multiple places. The most notable examples of these are the "City Cards" in the index action and the cards that display more specific information about the city in the show action. The navbar is also a Bootstrap navbar. I used custom CSS to style things such as my show action image gallery, the background for the index and show actions, and for the card backgrounds.

### Project Status

The frontend portion of this app is currently only at the minimum viable product stage. I would like to have more coherent styling throughout the app. I would also like to fix the afformentioned bug where the popups do not always fit inside the map. Most of my work going forward will be on the backend API where I will add APIs to gather the data that I want for the city, fix a bug where images are not updated, and perhaps add a more secure way to authenticate users.

#### Example:

This project is currently in development. Users can filter tweets by username and keyword and see visual data representation. Functionality to sort by additional parameters is in progress.

## Project Screen Shot(s)

#### Example:

[ PRETEND SCREEN SHOT IS HERE ]

[ PRETEND OTHER SCREEN SHOT IS HERE ]

## Installation and Setup Instructions

#### Example:

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/ideas`

## Reflection

- What was the context for this project? (ie: was this a side project? was this for Turing? was this for an experiment?)
- What did you set out to build?
- Why was this project challenging and therefore a really good learning experience?
- What were some unexpected obstacles?
- What tools did you use to implement this project?
  - This might seem obvious because you are IN this codebase, but to all other humans now is the time to talk about why you chose webpack instead of create react app, or D3, or vanilla JS instead of a framework etc. Brag about your choices and justify them here.

#### Example:

This was a 3 week long project built during my third module at Turing School of Software and Design. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.

Originally I wanted to build an application that allowed users to pull data from the Twitter API based on what they were interested in, such as 'most tagged users'. I started this process by using the `create-react-app` boilerplate, then adding `react-router-4.0` and `redux`.

One of the main challenges I ran into was Authentication. This lead me to spend a few days on a research spike into OAuth, Auth0, and two-factor authentication using Firebase or other third parties. Due to project time constraints, I had to table authentication and focus more on data visualization from parts of the API that weren't restricted to authenticated users.

At the end of the day, the technologies implemented in this project are React, React-Router 4.0, Redux, LoDash, D3, and a significant amount of VanillaJS, JSX, and CSS. I chose to use the `create-react-app` boilerplate to minimize initial setup and invest more time in diving into weird technological rabbit holes. In the next iteration I plan on handrolling a `webpack.config.js` file to more fully understand the build process.
