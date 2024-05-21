const router = require('express').Router();
const { Member, Contact, Role } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  if (req.session.logged_in) {
    res.render('homepage');
  // sending rendered Handlebars.js template to respond
  } else {
  res.render('homepage');
  }
});

//router.get('/', async (req, res) => {
//  // sending rendered Handlebars.js template to respond
//  res.render('homepage');
//});

router.get('/contact', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const contactData = await Contact.findAll().catch((err) => {
      res.json(err);
    });

    // Serialize data so the template can read it
    const contacts = contactData.map((contact) => contact.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('member_page', { 
      ...contacts, 
      logged_in: req.session.logged_in  
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  // sending rendered Handlebars.js template to respod
  res.render('login_signup');
});
router.get('/memberHome', async (req, res) => {
const membercontact = await Contact.findOne({
  where: {
    member_id: req.session.member_id
  }

})
  if(!membercontact){
    res.redirect('/member')
  }
  else{
    res.render('memberHome');
  }
});

router.get('/member', withAuth, async (req, res) => {
  try {
    const memberData = await Member.findByPk(req.session.member_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Contact }, { model: Role }],
    });

    const member = memberData.get({ plain: true });

    res.render('member_page', {
      ...member,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;