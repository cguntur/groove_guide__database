const router = require('express').Router();

router.get('/', async (req, res) => {
  // sending rendered Handlebars.js template to respod
  res.render('homepage');
});

router.get('/login', async (req, res) => {
  // sending rendered Handlebars.js template to respod
  res.render('login_signup');
});

router.get('/member', async (req, res) => {
  // sending rendered Handlebars.js template to respod
  res.render('member_page');
});


module.exports = router;