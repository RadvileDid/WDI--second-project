const router = require('express').Router();
// const events = require('../controllers/events');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.get('/', (req, res) => res.render('statics/index'));

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

module.exports = router;
