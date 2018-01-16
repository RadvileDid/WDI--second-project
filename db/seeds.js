const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const { env } = require('../config/environment');

const databaseURL = `mongodb://localhost/project-2-${env}`;
mongoose.connect(databaseURL);

const Event = require('../models/event');
const User = require('../models/user');

Event.collection.drop();
User.collection.drop();


User
  .create([
    {
      email: 'a@a.com',
      username: 'a',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      email: 'b@b.com',
      username: 'b',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      email: 'c@c.com',
      username: 'c',
      password: 'password',
      passwordConfirmation: 'password'
    }
  ])
  .then(users => {
    console.log(`${users.length} users were created!`);

    return Event
      .create([{
        title: 'Coding girls',
        createdBy: users[0]._id,
        // date: '12-02-2018',
        description: 'We envision a world where women are proportionally represented as technical leaders, executives. Join us to have this achieved! Bring your laptop and a friend',
        address: '311-318 High Holborn, London WC1V 7BN',
        industry: 'Tech',
        image: 'https://madlab.org.uk/wp-content/uploads/2015/11/Django-Girls-Manchester.jpg',
        comments: [
          {
            content: 'Blahblahblah',
            createdBy: users[0]._id
          },
          {
            content: 'OMGOMGOMG',
            createdBy: users[1]._id
          }
        ]
      }, {
        title: 'Star Trek Board Games',
        // date: '10-04-2018',
        createdBy: users[1]._id,
        description: 'Unformal Star Trek fan meet up in a pub with some board games. All levels of fans are welcomed so even if you have just started falling in love, you would certainly feel home.',
        address: '174 Queen Victoria St, London EC4V 4EG',
        industry: 'Sci-Fi & Games',
        image: 'http://i.dailymail.co.uk/i/pix/2016/10/07/16/3931CFB700000578-3827348-Marie_Gordon_left_28_from_Hampshire_arrives_with_friends_in_cost-a-23_1475855727005.jpg',
        comments: [
          {
            content: 'Blahblahblah',
            createdBy: users[0]._id
          },
          {
            content: 'OMGOMGOMG',
            createdBy: users[1]._id
          }
        ]
      }, {
        title: 'Fashion bloggers gossip',
        createdBy: users[1]._id,
        // date: '26-02-2018',
        description: 'Guests will be invited to a private room filled with surprises from the sponsors, exhibitors & complimentary refreshments to begin the day of fashion-forward fun.',
        address: '48-50 Camden High St, London NW1 0LT',
        industry: 'Fashion & Beauty',
        image: 'http://www.sandynene.com/wp-content/uploads/2015/09/Fashion_Bloggers_S2-800x533.jpg',
        comments: [
          {
            content: 'lalalal',
            createdBy: users[1]._id
          },
          {
            content: 'hahahah',
            createdBy: users[1]._id
          },
          {
            content: 'noooo',
            createdBy: users[0]._id
          }
        ]
      }]);
  })
  .then((events) => {
    console.log(`${events.length} events created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
