#WDI--second-project
###Goal:
To create a full-stack Express application that has Mongo database using the Mongoose ORM.
###My app:
* Has 2 models with embedded relationship.
* Has authentication - with hashed passwords & authorisation flow.
* Has complete RESTful routes with all CRUD actions.
* Semantically clean HTML
* Deployed online and is accessible to the public on Heroku.
* Includes data from Google Autocomplete API

###Technologies used:
* JavaScript (ECMAScript 6) & jQuery
* HTML5
* Express
* Node.js
* CSS & SCSS
* Bootstrap
* MongoDB
* Gulp
* Git
* Heroku

###Dependencies used:
* Bcrypt:
* Bluebird
* Body-parser
* EJS
* Express
* Express-ejs-layouts
* Express-flash
* Express-session
* Flash
* Method-override
* Moment.js
* Mongoose
* Morgan

###Secondary tools
* Balsamiq
* Trello

##Overview
Events website where you can register/login and see events. Logged in user can add events and comments. Only the user who is logged in and added the event or comment can delete it.

###App screenshots:
####Homepage:
<a href="https://imgur.com/t2L49F6"><img src="https://i.imgur.com/t2L49F6.png" title="source: imgur.com" /></a>
####List of all events:
<a href="https://imgur.com/wgh8n7u"><img src="https://i.imgur.com/wgh8n7u.png" title="source: imgur.com" /></a>
####Filtered events:
<a href="https://imgur.com/XlIuPob"><img src="https://i.imgur.com/XlIuPob.png" title="source: imgur.com" /></a>
####Single event page for guest user:
<a href="https://imgur.com/HP7L32s"><img src="https://i.imgur.com/HP7L32s.png" title="source: imgur.com" /></a>
####Single event page for the logged in user:
<a href="https://imgur.com/W8Hlg4E"><img src="https://i.imgur.com/W8Hlg4E.png" title="source: imgur.com" /></a>
####Mobile:
<a href="https://imgur.com/c3ih9VT"><img src="https://i.imgur.com/c3ih9VT.png" title="source: imgur.com" /></a>


##Visit game
View on [Heroku](http://letsketchup.herokuapp.com/) or [Github](https://github.com/RadvileDid/WDI--second-project).
##Process

###Research, Concepts and wireframes
To build this game I have researched industry for inspiration and to ensure I will meet all the requirements I have chosen one to wireframe it for development.

Here are final low fidelity wireframes that I come up:
<a href="https://imgur.com/TeNs5Ei"><img src="https://i.imgur.com/TeNs5Ei.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/RNKkkv4"><img src="https://i.imgur.com/RNKkkv4.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/CEMgG9Q"><img src="https://i.imgur.com/CEMgG9Q.png" title="source: imgur.com" /></a>

###Development

Before I have started to code, I have planned out the app layout structure, the different routes, functions and models this app will need. This way I saved time.

During development of the game I have faced these challenges which later turned into the things I have learned:

* Using external API (Google Search Autocomplete) 
* Filtering all events & Giving extra rights for the logged in users
