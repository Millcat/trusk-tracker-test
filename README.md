# Front-end developer test: Tracker App

## Instructions:

**Current state:**
We have a project with both back-end and front-end sides. The server emit live positions of drivers who are doing delivery tasks. 
In addition to this, we can query the server on a specific route to retrieve informations about the driver current task.

The front app simply displays the live info data about the position of the drivers in a simple table. Currently, the app doesn't display any information about the tasks of the drivers.

**Target state:**
We want a more friendly user interface, and add the ability to display drivers tasks informations.

To do this, we want to add a map at the bottom of the table that shows the live position of the driver with markers (refreshed in real time, like the data in the table).

We want the ability to filter by driver id the informations displayed on the map (only front filtering).

On a driver marker click event, we want to load and show up the driver current task informations (in a modal or a popup). 

We also want to add a new option on our app: the possibility to switch between a light and a dark theme. 

## Technical specifications

**You must have the node version 10.13.0**

The server part was made with: 
- koa
- socket.io
- xml2js

To retrieve the driver current task info, you must make the following ajax request (while running the server side): 
`GET http://localhost:3000/tasks/{driverId}`

*You don't have to update the server side code, all is already done.*

The front part was made with: 
- create-react-app
- uberweb/baseui (https://baseweb.design)
- socket.io client

You can add any library you want on the front-end but we want the usage of the react-google-maps for displaying the drivers positions (https://github.com/tomchentw/react-google-maps).

Please use the last features of react (eg: don't write classes, use hooks, context, etc).

We currently connect to a socket using socket.io to display live informations. The implementation is dirty and is directly done in a component. Our app is not large enough for redux or redux-sagas, so move the socket.io 
implementation using the React Context.  

Notes: consider that the app will be used all day long by users, so you should make the UI / UX as smooth as possible.  

## Get started: 

Clone this project on your machine. You will have to set-up server side environment (see the readme at the root of the server folder), and the front-end side (see the readme too at the root of the app folder).

When you are done with the target state, push it to a personal repository then send me the link to: nicolas.beaudoin@trusk.com 

Contact me if you need for any informations about the project or installation issues.
