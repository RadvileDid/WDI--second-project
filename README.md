![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# WDI--second-project

For the second project at General Assembley Full Stack Web Development course we were asked to create working full-stack **Express** application that has a **Mongo** database using the **Mongoose ORM**.

To ensure I will meet all the requirements, I came up with the idea for a casual meet up/catch up website. Here are some wireframes from the day 1:
<a href="https://imgur.com/CEMgG9Q"><img src="https://i.imgur.com/CEMgG9Q.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/TeNs5Ei"><img src="https://i.imgur.com/TeNs5Ei.png" title="source: imgur.com" /></a>

### My app:

* Is fully **responsive**
* Has **2 models** and there is embdedded relationship.
* It has **authentication** - with hashed passwords & an authorisation flow.
* Have complete **RESTful routes** with all CRUD actions.
* Is semantically clean **HTML**
* Is deployed **online** and is accessible to the public [here](http://letsketchup.herokuapp.com/).
* Includes data from a **Google Autocomplete API**

###Overview:
An events website where you can register/login and see events. If the user is logged in, he/she can add events and add comments on any event they see. Only the user who added event or comment can delete it but would need to be logged in to do so.

##Installation instructions
#####Run locally
* Download or clone the Github repo [here](http://letsketchup.herokuapp.com/)
* View on [Github](https://github.com/RadvileDid/WDI--second-project)

####View on Heroku
* View [online](http://letsketchup.herokuapp.com/)

##Technologies used
* Express
* Node.js
* Javascript ES6
* jQuery
* HTML5
* CSS
* SCSS/SASS
* Bootstrap
* MongoDB
* Gulp
* Git
* Heroku

###Dependencies used
* bcrypt:
* bluebird
* body-parser
* ejs
* express
* express-ejs-layouts
* express-flash
* express-session
* flash
* method-override
* moment
* mongoose
* morgan

###Secondary tools
* Balsamiq
* Trello

## Results

Here are the few different view pages of the final result:

Homepage
<a href="https://imgur.com/t2L49F6"><img src="https://i.imgur.com/t2L49F6.png" title="source: imgur.com" /></a>

All events
<a href="https://imgur.com/wgh8n7u"><img src="https://i.imgur.com/wgh8n7u.png" title="source: imgur.com" /></a>

Filtered events
<a href="https://imgur.com/XlIuPob"><img src="https://i.imgur.com/XlIuPob.png" title="source: imgur.com" /></a>

Single ecvent page if user is not logged in
<a href="https://imgur.com/HP7L32s"><img src="https://i.imgur.com/HP7L32s.png" title="source: imgur.com" /></a>

Single event if user is logged in
<a href="https://imgur.com/W8Hlg4E"><img src="https://i.imgur.com/W8Hlg4E.png" title="source: imgur.com" /></a>

For this project we had 4 days therefore I feel quite proud of the final result. However, if I would have more time I would add another Google API to show the event locaton on the map, would make the app more responsive and add some advanced features.