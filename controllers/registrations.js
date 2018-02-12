const User = require('../models/user');

function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res, next){

  User
    .create(req.body)
    .then((user) => {
      req.flash('info', `Thanks for registering, ${user.username}. Please login` );
      res.redirect('/login');
    })
    .catch((err) => {
      if(err.name === 'ValidationError') {
        return res.badRequest('/register', err.toString());
      }
      next(err);
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
