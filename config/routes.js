const router = require('express').Router();
const events = require('../controllers/events');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.get('/', (req, res) => res.render('statics/index'));

//USER________________________________
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

//EVENTS________________________________
//INDEX
router.route('/events')
  .get(events.index);

router.route('/events/filter/:filter')
  .get(events.indexFilter);


// NEW
router.route('/events/new')
  .get(events.new);

// CREATE
router.route('/events')
  .post(events.create);

// EDIT
router.route('/events/:id/edit')
  .get(events.edit);

//UPDATE, DELETE and SHOW
router.route('/events/:id')
  .get(events.show)
  .put(events.update)
  .delete(events.delete);

router.route('/events/:id/comments')
  .post(events.createComment);

router.route('/events/:id/attendants')
  .put(events.addAttendant);

router.route('/events/:id/comments/:commentId')
  .delete(events.deleteComment);

module.exports = router;
