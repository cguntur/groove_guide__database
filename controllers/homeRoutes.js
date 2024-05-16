const router = require('express').Router();
const { Member, Contact, Role } = require('../models');

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
  try {
      const memberData = await Member.findByPk(req.session.member_id)
      const member = memberData.get({plain:true})
      res.render('member_page', {
        logged_in:req.session.logged_in,
        member
      });
  } catch (error) {
    res.status(500).json(error)
  }
  
});


module.exports = router;