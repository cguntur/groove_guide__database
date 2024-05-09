const router = require('express').Router();

router.get('/', async (req, res) => {
  // sending rendered Handlebars.js template to respod
  res.render('homepage');
});

module.exports = router;