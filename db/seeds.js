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
      username: 'Agathe D.',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      email: 'b@b.com',
      username: 'Bobby Stuart',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      email: 'c@c.com',
      username: 'Ciara72',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      email: 'd@d.com',
      username: 'Tom Jones',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      email: 'e@e.com',
      username: 'Jane Doe',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      email: 'f@f.com',
      username: 'Brigitte Jones',
      password: 'password',
      passwordConfirmation: 'password'
    },
    {
      email: 'g@g.com',
      username: 'Ricky Martin',
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
        date: '2018-12-02',
        description: 'We envision a world where women are proportionally represented as technical leaders, executives. Join us to have this achieved! Bring your laptop and a friend',
        address: '311-318 High Holborn, London WC1V 7BN',
        industry: 'Tech',
        image: 'https://madlab.org.uk/wp-content/uploads/2015/11/Django-Girls-Manchester.jpg',
        comments: [
          {
            content: 'Do we know who will be making the speeches this year? So excited to see the list!',
            createdBy: users[0]._id
          },
          {
            content: 'Yes, would love to know who are coming this year!',
            createdBy: users[1]._id
          }
        ]
      }, {
        title: 'Star Trek Board Games',
        date: '2018-12-02',
        createdBy: users[1]._id,
        description: 'Unformal Star Trek fan meet up in a pub with some board games. All levels of fans are welcomed so even if you have just started falling in love, you would certainly feel home.',
        address: '174 Queen Victoria St, London EC4V 4EG',
        industry: 'Sci-Fi & Games',
        image: 'http://i.dailymail.co.uk/i/pix/2016/10/07/16/3931CFB700000578-3827348-Marie_Gordon_left_28_from_Hampshire_arrives_with_friends_in_cost-a-23_1475855727005.jpg',
        comments: [
          {
            content: 'So excited, cannot wait! Who else is coming?!',
            createdBy: users[0]._id
          },
          {
            content: 'OMGOMGOMG, finally!!!',
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
            content: 'Does anyone know if there is a dress code?',
            createdBy: users[1]._id
          },
          {
            content: 'I think this years theme is "Legally Blonde"...',
            createdBy: users[1]._id
          },
          {
            content: 'This year will be so amazing!',
            createdBy: users[0]._id
          }
        ]
      }, {
        title: 'Accounting for dummies',
        createdBy: users[5]._id,
        date: '2018-07-02',
        description: 'Featuring the latest information on accounting methods and standards, this guide shows you how to avoid accounting fraud, minimize confusion, maximize profits, and make sense of accounting basics. You′ll quickly understand how to manage inventory, report income and expenses for public or private companies, evaluate profit margins, analyze business strengths and weaknesses, and manage budgets ',
        address: '48-50 Camden High St, London NW1 0LT',
        industry: 'Career and Learning',
        image: 'https://pivothearing.com/wp-content/uploads/2016/04/shutterstock_314427548-min-1024x775-1024x775.jpg',
        comments: [
          {
            content: 'Need to bring my kids here, going to college next year - loads to learn, lol',
            createdBy: users[4]._id
          },
          {
            content: 'Do you guys know if there will be Q&A time?',
            createdBy: users[4]._id
          },
          {
            content: 'This year will be so amazing, go accountants!',
            createdBy: users[3]._id
          }
        ]
      }, {
        title: 'Oxygen free jumping class for families',
        createdBy: users[6]._id,
        date: '2018-06-10',
        description: 'Go crazy, go wild! A fun and sporty acrtivity for all family.',
        industry: 'Career and Learning',
        image: 'http://www.space-hoppers.co.uk/blog/wp-content/uploads/Oxegen-5441-1108x623.jpg',
        comments: [
          {
            content: 'OMG - excitement overload',
            createdBy: users[1]._id
          },
          {
            content: 'Do you guys know if we need to bring our own shoes?',
            createdBy: users[4]._id
          },
          {
            content: 'Great questions, anything else we should know before coming?',
            createdBy: users[0]._id
          }
        ]
      }, {
        title: 'Night photography walk around London',
        createdBy: users[5]._id,
        date: '2018-03-10',
        description: 'Join us for a walk around London, get to know your fellow club members and make some great London shots!',
        industry: 'Photography',
        image: 'https://static.wixstatic.com/media/844d8f_43166bf5f1524a188f5778919425ab05~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_518,h_373,al_c,q_80,usm_0.66_1.00_0.01/844d8f_43166bf5f1524a188f5778919425ab05~mv2_d_5616_3744_s_4_2.webp',
        comments: [
          {
            content: 'OMG - excitement overload',
            createdBy: users[1]._id
          },
          {
            content: 'Do you guys know if we need to bring our own shoes?',
            createdBy: users[4]._id
          },
          {
            content: 'Great questions, anything else we should know before coming?',
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
