var express = require('express');
const passport = require('passport')
const User = require('../models/User')
const Validate = require('../auth/ValidateRequest')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  Validate('index', req, res)
});

router.get('/register', (req, res, next) => {
  Validate('register', req, res)
} )

router.post('/register', (req, res) => {

  User.postNewUser(req.body, req.body.password, (err, user) => {
    if (err) {
      return res.render('register', { error: err.message })
    }

    passport.authenticate('local')(req, res, () => {
      req.session.save((err) => {
        if (err) return next(err)

        res.redirect('/')
      })
    })

  })

})

router.get('/login', (req, res) => {
  Validate('login', req, res)
})

router.post('/login', passport.authenticate('local', {session: true}), (req, res) => {
  res.redirect('/')
})

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    req.logOut();
    res.clearCookie("connect.sid");
    res.redirect("/");
  })
})

router.get('/ping', (req, res) => {
  res.status(200).send('inggggggggx43')
})

module.exports = router;
