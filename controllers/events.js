const Event = require('../models/event');
const moment = require('moment');

function indexFilter(req, res, next) {
  const dictionary = {
    scifi: 'Sci-Fi & Games',
    health: 'Health & Wellness',
    sports: 'Sports & Fitness',
    photo: 'Photography',
    food: 'Food & Drink',
    music: 'Music',
    film: 'Film',
    dance: 'Dance',
    books: 'Books',
    pets: 'Pets',
    arts: 'Arts & Crafts',
    fashion: 'Fashion & Beauty',
    career: 'Career & Learning',
    tech: 'Tech',
    other: 'Other'
  };

  Event
    .find({'industry': dictionary[req.params.filter]})
    .exec()
    .then(events => {
      res.render('events/index', {events});
    })
    .catch(next);
}

function eventsIndex(req, res) {

  Event
    .find()
    .exec()
    .then((events) => {
      res.render('events/index', {events});
    });
}

function eventsNew(req, res) {
  res.render('events/new');
}

function eventsCreate(req, res, next) {
  req.body.createdBy = req.user;

  Event
    .create(req.body)
    .then(() => {
      res.redirect('/events');
    })
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest('/events/new', err.toString());
      }
      next(err);
    });
}

function eventsShow(req, res, next) {
  Event
    .findById(req.params.id)
    .populate('attendants createdBy comments.createdBy comments.timestamps')
    .exec()
    .then((event) => {
      if (!event) return res.status(404).send('Sorry, not found');

      return res.render('events/show', { event, moment });
    })
    .catch(next);
}

function eventsEdit(req, res, next) {
  Event
    .findById(req.params.id)
    .exec()
    .then((event) => {
      if (!event) return res.status(404).send('Sorry, not found');
      res.render('events/edit', {event});
    })
    .catch(next);
}

function eventsUpdate(req, res, next) {
  Event
    .findById(req.params.id)
    .exec()
    .then((event) => {
      if (!event) return res.status(404).send('Sorry, not found');

      event = Object.assign(event, req.body);
      return event.save();
    })
    .then((event) => {
      res.redirect(`/events/${event.id}`);
    })
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest(`/events/${req.params.id}/edit`, err.toString());
      }
      next(err);
    });
}

function eventsDelete(req, res, next) {
  Event
    .findById(req.params.id)
    .exec()
    .then((event) => {
      if(!event) return res.notFound();
      return event.remove();
    })
    .then(() => res.redirect('/events'))
    .catch(next);
}

function secretRoute(req, res) {
  res.render('secret');
}

function createCommentRoute(req, res, next) {
  req.body.createdBy = req.user;

  Event
    .findById(req.params.id)
    .exec()
    .then((event) => {
      if(!event) return res.notFound();

      event.comments.push(req.body);
      return event.save();
    })
    .then((event) => {
      res.redirect(`/events/${event.id}`);
    })
    .catch(next);
}

function deleteCommentRoute(req, res, next) {

  Event
    .findById(req.params.id)
    .exec()
    .then((event) => {
      if(!event) return res.notFound();

      const comment = event.comments.id(req.params.commentId);
      comment.remove();
      return event.save();
    })

    .then((event) => {
      res.redirect(`/events/${event.id}`);
    })
    .catch(next);
}

function addAttendantsRoute(req, res, next) {
  
  Event
    .findById(req.params.id)
    .exec()
    .then((event) => {
      if(!event) return res.notFound();


      if (event.attendants.indexOf(req.body.attendant) === -1) {
        event.attendants.push(req.body.attendant);
      }

      return event.save();
    })
    .then((event) => {
      res.redirect(`/events/${event.id}`);
    })
    .catch(next);
}

module.exports = {
  index: eventsIndex,
  new: eventsNew,
  create: eventsCreate,
  update: eventsUpdate,
  delete: eventsDelete,
  show: eventsShow,
  edit: eventsEdit,
  secret: secretRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute,
  addAttendant: addAttendantsRoute,
  indexFilter: indexFilter
};
