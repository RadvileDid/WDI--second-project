const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const { env } = require('../config/environment');

const databaseURL = `mongodb://localhost/project-2-${env}`;
mongoose.connect(databaseURL);

const Event = require('../models/event');
// const User = require('../models/user');

Event.collection.drop();
// User.collection.drop();

Event
  .create([{
    title: 'Coding girls',
    // date: '12-02-2018',
    description: 'We envision a world where women are proportionally represented as technical leaders, executives. Join us to have this achieved! Bring your laptop and a friend',
    address: '311-318 High Holborn, London WC1V 7BN',
    industry: 'Technical',
    image: 'https://madlab.org.uk/wp-content/uploads/2015/11/Django-Girls-Manchester.jpg'
  }, {
    title: 'Star Trek Board Games',
    // date: '10-04-2018',
    description: 'Unformal Star Trek fan meet up in a pub with some board games. All levels of fans are welcomed so even if you have just started falling in love, you would certainly feel home.',
    address: '174 Queen Victoria St, London EC4V 4EG',
    industry: 'Entertainment',
    image: 'http://i.dailymail.co.uk/i/pix/2016/10/07/16/3931CFB700000578-3827348-Marie_Gordon_left_28_from_Hampshire_arrives_with_friends_in_cost-a-23_1475855727005.jpg'
  }, {
    title: 'Fashion bloggers gossip',
    date: '26-02-2018',
    description: 'Guests will be invited to a private room filled with surprises from the sponsors, exhibitors & complimentary refreshments to begin the day of fashion-forward fun.',
    address: '48-50 Camden High St, London NW1 0LT',
    industry: 'Fashion',
    image: 'http://www.sandynene.com/wp-content/uploads/2015/09/Fashion_Bloggers_S2-800x533.jpg'
  }])
  .then((events) => {
    console.log(`${events.length} events created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
