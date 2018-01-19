const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

mongoose.connect(dbURI);

const Event = require('../models/event');
const User = require('../models/user');

Event.collection.drop();
User.collection.drop();


User
  .create([
    {
      email: 'a@a.com',
      username: 'Agathe D.',
      password: 'a',
      passwordConfirmation: 'a'
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
        description: 'Informal Star Trek fan meet up in a pub with some board games. All levels of fans are welcomed so even if you have just started falling in love, you would certainly feel home.',
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
        title: 'Bloggers gossip',
        createdBy: users[1]._id,
        date: '2018-02-02',
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
        title: 'Yoga for the young spirits',
        createdBy: users[4]._id,
        date: '2018-06-10',
        description: 'There is no right age - only the right attitude. Join us every week and free your spirit!',
        industry: 'Health & Wellness',
        address: '2300 E Ocean Blvd, Long Beach, CA 90803, USA',
        image: 'https://www.silversurfers.com/wp-content/uploads/2014/04/bigstock-Senior-Woman-Meditating-On-San-53724757.jpg',
        comments: [
          {
            content: 'That\'s exactly what my grandma needs, will make sure to bring her along!',
            createdBy: users[6]._id
          },
          {
            content: 'Do you guys know if we need to bring anything',
            createdBy: users[5]._id
          },
          {
            content: 'Please bring the comfortable gear and everything else (parking, yoga mats, towels and fresh mint tea) will be taken care of. See you soon!',
            createdBy: users[4]._id
          }
        ]
      }, {
        title: 'Accounting for dummies',
        createdBy: users[5]._id,
        date: '2018-07-02',
        description: 'Featuring the latest information on accounting methods and standards, this guide shows you how to avoid accounting fraud, minimize confusion, maximize profits, and make sense of accounting basics. You′ll quickly understand how to manage inventory, report income and expenses for public or private companies, evaluate profit margins, analyze business strengths and weaknesses, and manage budgets.',
        address: '2, 643 W 171st St, New York, NY 10032, USA',
        industry: 'Career & Learning',
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
        title: 'Oxygen free-jumping for families',
        createdBy: users[6]._id,
        date: '2018-06-10',
        address: '48-50 Camden High St, London NW1 0LT',
        description: 'Go crazy, go wild! A fun and sporty acrtivity for all family.',
        industry: 'Dance',
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
        title: 'DIY doughnut party',
        createdBy: users[4]._id,
        date: '2018-03-01',
        description: 'If you feel like stress is taking the most of your life, or just that you eat healthier than you would like to - join our crazy doughnut dipping party and feel that sugar rush.',
        industry: 'Food & Drinks',
        address: 'Vijzelgracht 37, 1017 HS Amsterdam, Netherlands',
        image: 'https://rcs.co.za/media/2108/0803-donut-dipping-bar_website-header.jpg',
        comments: [
          {
            content: 'NOOOO way, I\'ve got to tell everyone!!!',
            createdBy: users[6]._id
          },
          {
            content: 'Count me in and keep me in the list 4EVAH',
            createdBy: users[1]._id
          },
          {
            content: 'I can smell the sugar already, lol!',
            createdBy: users[2]._id
          }
        ]
      }, {
        title: 'Night walk around London',
        createdBy: users[5]._id,
        date: '2018-03-10',
        description: 'Join us for a walk around London, get to know your fellow club members and make some great London shots!',
        industry: 'Photography',
        address: 'Waterloo Rd, Lambeth, London SE1 8SW',
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
      }, {
        title: 'Bring a book to life',
        createdBy: users[3]._id,
        date: '2018-05-28',
        description: 'If you are interested in second-hand books - look no further! During our meetups we scan local bookshops and markets and after reading the books, will share them with others. The most interesting or oldest find will get a prize!',
        industry: 'Books',
        address: '13 Blenheim Cres, London W11 2EE',
        image: 'http://jomatar.com/wp-content/uploads/2016/04/Notting-Hill-London.jpg',
        comments: [
          {
            content: 'Finally, sounds like a perfect club for me!',
            createdBy: users[1]._id
          },
          {
            content: 'I have finished reading my books from the last time, if anyone wants to read them - let me know and I will bring them along.',
            createdBy: users[4]._id
          },
          {
            content: 'I would love to try one of those books!',
            createdBy: users[6]._id
          },
          {
            content: 'Me too!',
            createdBy: users[0]._id
          }
        ]
      },{
        title: 'We <3 Corgi',
        createdBy: users[6]._id,
        date: '2018-08-20',
        description: 'Annual Corgi meet up. Bring your furry friends, picnic mats and don\'t forget your smile!',
        industry: 'Pets',
        address: '416 Sydney Park Rd, Alexandria NSW 2015, Australia',
        image: 'https://i.ytimg.com/vi/iTwvzok5fx8/maxresdefault.jpg',
        comments: [
          {
            content: 'Finally, sounds like a perfect club for me!',
            createdBy: users[1]._id
          },
          {
            content: 'If only this could be a more regular type of thing..',
            createdBy: users[4]._id
          } ,
          {
            content: 'I vote YES.',
            createdBy: users[0]._id
          }
        ]
      }, {
        title: 'Pinterest for dummies',
        createdBy: users[0]._id,
        date: '2018-02-20',
        description: 'A weekly DIY meet up where we get to do all kind of things seen on Pinterest. Suggestions and ideas for the next meet ups are more than welcomed!',
        industry: 'Arts & Crafts',
        address: '77 Pitfield St, London N1 6BT',
        image: 'http://craftshady.com/wp-content/uploads/2017/05/diy-pinterest-craft-ideas.jpg',
        comments: [
          {
            content: 'Do we need to bring our own supplies?!',
            createdBy: users[1]._id
          },
          {
            content: 'Nope, we got you covered!',
            createdBy: users[0]._id
          }
        ]
      }, {
        title: 'Run like no one is watching',
        createdBy: users[6]._id,
        date: '2018-07-28',
        description: 'Miss running but afraid to start again because someone might be watching and judging how you look or run? Forget it! Here at London Crazy Run Club we only care for you to be happy and looks, body types or shapes, age or any other do not matter.',
        industry: 'Sports & Fitness',
        address: 'Camden Lock Pl, London NW1 8AF',
        image: 'https://www.easyhotel.com/media/2053/camden.jpg',
        comments: [
          {
            content: 'Finally, sounds like a perfect club for me!',
            createdBy: users[1]._id
          },
          {
            content: 'Is this a one time thing or do you guys think we could meet regulary?',
            createdBy: users[4]._id
          },
          {
            content: 'Oh yes, let\'s do this a weekly thing!',
            createdBy: users[6]._id
          },
          {
            content: 'I vote YES.',
            createdBy: users[0]._id
          }
        ]
      }, {
        title: 'Drums drums drums, it is all about the drums',
        createdBy: users[4]._id,
        date: '2018-04-05',
        description: 'Get ready to be load! And even louder. Will visit a few local places well known for their great music choice and will get to listen, get tips and tricks. And of course - have some beer!',
        industry: 'Music',
        image: 'https://www.fuse.tv/image/54382175d2b6b20a3a000128/768/512/travis-barker-of-blink-182-drummers-gallery.jpg',
        address: 'Dolziger Str. 24, 10247 Berlin, Germany',
        comments: [
          {
            content: 'Been last time - love it!',
            createdBy: users[2]._id
          },
          {
            content: 'Do we need to worry about the public transport?',
            createdBy: users[0]._id
          }
        ]
      }, {
        title: 'Jazz session for dummies',
        createdBy: users[6]._id,
        date: '2018-04-15',
        description: 'Nothing fancy - just some people loving and living with Jazz. If you would like to learn, experience or do more - join us at O\'Neill\'s Wardour Street pub where you will get a chance to try some instruments, listen and have a chat with the fellow Jazz lovers.',
        industry: 'Music',
        image: 'http://www.thejazzbar.co.uk/wp-content/uploads/2016/10/cropped-Jazz-Bar-Edinburgh-Int-View.jpg',
        address: '33-37 Wardour St, London W1D 6PU',
        comments: [
          {
            content: 'Are suggestions for a different location welcomed?',
            createdBy: users[4]._id
          }
        ]
      }, {
        title: 'Street food feast',
        createdBy: users[6]._id,
        date: '2018-02-05',
        description: 'Join local food lovers for an awesome feast. Will try and rate different food markets and stalls to make our favourite list. Friendly notice: taking pictures is not allowed and some places so ask before taking them!',
        industry: 'Food & Drink',
        image: 'http://upbproducts.co.uk/wp-content/uploads/2014/12/Street-Food-Thursday.jpg',
        address: 'Yaowarat Rd, Krung Thep Maha Nakhon, Thailand',
        comments: [
          {
            content: 'Anyone planning to go?',
            createdBy: users[1]._id
          },
          {
            content: 'Yap, want to check it out!',
            createdBy: users[2]._id
          }
        ]
      }, {
        title: 'Summer Outdoors Cinema',
        createdBy: users[4]._id,
        date: '2018-06-01',
        description: 'Black and White movies every week - all summer. Please bring your blankets and snacks if needed. Some drinks will be available!',
        industry: 'Film',
        image: 'http://www.meldmagazine.com.au/wp-content/uploads/2012/12/Copy-of-Moonlight-Melbourne-John-Gollings.jpg',
        address: 'Roof A, Bussey Building,, 133 Rye Ln, London SE15 4ST',
        comments: [
          {
            content: 'Fav thing to do in the summer!',
            createdBy: users[5]._id
          },
          {
            content: 'My weekend is planned!',
            createdBy: users[6]._id
          }
        ]
      }, {
        title: '24/7 boardgames',
        createdBy: users[3]._id,
        date: '2018-03-01',
        description: 'Community championship for the board games fans. New games suggestions are more than welcomed!',
        industry: 'Sci-Fi & Games',
        image: 'https://now-here-this.timeout.com/wp-content/uploads/2014/11/DraughtsCafe_RG020.jpg',
        address: '337 Acton Mews, Hackney, London E8 4EA',
        comments: [
          {
            content: 'Count me in!',
            createdBy: users[5]._id
          },
          {
            content: 'Me too!',
            createdBy: users[0]._id
          }
        ]
      }, {
        title: 'Summer \'18 ending with the beach disco',
        createdBy: users[2]._id,
        date: '2018-09-01',
        description: 'A closing night foir the hotel Miami Collins. All visitors and guests are welcomed - no entrance fee. We thank you for staying with us and hope to see next year!',
        industry: 'Dance',
        image: 'http://www.northbeachnews.com/blog/wp-content/uploads/2015/06/Bandshell-Dance-Night-1024x651.jpg',
        address: '2891 Collins Ave, Miami Beach, FL 33140, USA',
        comments: [
          {
            content: 'Is it possible to request some songs?',
            createdBy: users[5]._id
          },
          {
            content: 'Is there a dress code?',
            createdBy: users[0]._id
          },
          {
            content: 'No dresscode - as long as you feel comfortable! We also have a song wishlist which can be found at the entrance of the Hotel cafe.',
            createdBy: users[2]._id
          }
        ]
      }, {
        title: 'Lewisham Book club',
        createdBy: users[2]._id,
        date: '2018-09-01',
        description: 'Regular locals meet up where we discuss the books we read, share our favourites and other feedback. Every week a new book will be chosen so feel free to suggest a book you always wanted to read!',
        industry: 'Books',
        image: 'https://i2.wp.com/makezine.com/wp-content/uploads/2016/01/library_1.jpg?resize=1200%2C670&strip=all&ssl=1',
        address: '261 Lewisham High St, London SE13 6AY',
        comments: [
          {
            content: 'I love you guys - it will be my 5th time and feel so happy I found you.',
            createdBy: users[1]._id
          },
          {
            content: 'Oh, I will be busy this time! Hope I will be able to join next time.',
            createdBy: users[0]._id
          },
          {
            content: 'Same, I feel like I finally found same crazy people to share my passion! lol',
            createdBy: users[5]._id
          }
        ]
      }, {
        title: 'Make a pie club!',
        createdBy: users[6]._id,
        date: '2018-04-15',
        description: 'Every week a new recipe, a new location and a new energy. Join us for some sugar rush!',
        industry: 'Food & Drink',
        image: 'https://s-media-cache-ak0.pinimg.com/originals/e3/d5/1d/e3d51dc34df49d938dfab78344b48c34.jpg',
        address: '261 Lewisham High St, London SE13 6AY',
        comments: [
          {
            content: 'Would not miss for anything!',
            createdBy: users[1]._id
          }
        ]
      }, {
        title: 'Walk till you drop!',
        createdBy: users[0]._id,
        date: '2018-04-05',
        description: 'Forget the office life, bills and long commuting hours and take a deep breath of nature.',
        industry: 'Sports & Fitness',
        image: 'https://media.deseretdigital.com/file/3ae0ba3723?type=jpeg&quality=55&c=15&a=4379240d',
        address: 'Mountain peak, Hochgolling, 5580, Austria',
        comments: [
          {
            content: 'Does anyone have a good pair of walking sticks to borrow?',
            createdBy: users[3]._id
          },
          {
            content: 'Any tips for the shoes/boots to wear? Seems the track might be snowy!',
            createdBy: users[5]._id
          }
        ]
      }, {
        title: 'Wine invited you for a date!',
        createdBy: users[1]._id,
        date: '2018-04-28',
        description: 'Do you have a passion for a good wine? Or maybe you make your own? Join us at Wine Date Club to share this passion. If you make your own - we would love to try! Bring a friend along.',
        industry: 'Food & Drink',
        address: 'Calle del León, 12, 28014 Madrid, Spain',
        image: 'http://michiganwinecollaborative.com/wp-content/uploads/2017/04/Wine-Tasting-web.jpg',
        comments: [
          {
            content: 'Hahaha, sounds like a perfect club for me after a looong week!',
            createdBy: users[1]._id
          },
          {
            content: 'Is this a one time thing or do you guys think we could meet regulary?',
            createdBy: users[4]._id
          },
          {
            content: 'Oh yes, let\'s do this a weekly thing!',
            createdBy: users[6]._id
          },
          {
            content: 'I vote YES and YES and YES.',
            createdBy: users[0]._id
          },
          {
            content: 'Is there a list of wines we will get to try? Or can we get that during the meet up? Would be helpful as I like to track it.',
            createdBy: users[2]._id
          }
        ]
      }, {
        title: 'Hobbit marathon',
        createdBy: users[5]._id,
        date: '2018-03-12',
        description: 'Get ready for a long night of movie night! Some drinks and snacks will be provided but feel free to bring more. Also, suggestions for the next movie are welcomed!',
        address: '1000 Van Ness Ave, San Francisco, CA 94109, USA',
        industry: 'Film',
        image: 'https://img.thedailybeast.com/image/upload/d_placeholder_euli9k/dpr_2.0/c_limit,w_585/fl_lossy,q_auto/v1/articles/2012/12/14/the-hobbit-19-changes-from-j-r-r-tolkien-s-novel-to-peter-jackson-s-movie/the-hobbit-lit-check-klassen-tease_bsajdk',
        comments: [
          {
            content: 'I would love to see the Pirates of the Caribbean!',
            createdBy: users[1]._id
          },
          {
            content: 'Oh same! Also, what about Harry Potter?',
            createdBy: users[4]._id
          },
          {
            content: 'Oh yes, let\'s do this a weekly thing!',
            createdBy: users[6]._id
          },
          {
            content: 'I vote YES and YES and YES.',
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
