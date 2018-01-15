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
        industry: 'Technical',
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
