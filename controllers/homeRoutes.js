const router = require('express').Router();

router.get('/', async (req, res) => {
  // sending rendered Handlebars.js template to respod
  res.render('homepage');
});

router.get('/login', async (req, res) => {
  // sending rendered Handlebars.js template to respod
  res.render('login_signup');
});

router.get('/profile', async (req, res) => {
  // sending rendered Handlebars.js template to respod
  res.render('profilepage');
});


module.exports = router;