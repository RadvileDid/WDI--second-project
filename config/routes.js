const router = require('express').Router();
const events = require('../controllers/events');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
// const secureRoute = require('../lib/secureRoute');

router.get('/', (req, res) => res.render('statics/index'));

//user
//register
router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

//login
router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

//logout
router.route('/logout')
  .get(sessions.delete);

//EVENT
//INDEX
router.route('/events')
  .get(events.index);

// NEW
router.route('/events/new')
  .get(events.new);

// CREATE
router.route('/events')
  .post(events.create);

// EDIT
router.route('/events/:id/edit')
  .get(events.edit);

//update, delete and show
router.route('/events/:id')
  .get(events.show)
  .put(events.update)
  .delete(events.delete);

router.route('/events/:id/comments')
  .post(events.createComment);

router.route('/events/:id/comments/:commentId')
  .delete(events.deleteComment);

module.exports = router;
