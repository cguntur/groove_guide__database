const router = require('express').Router();
const { Member }=require("../../models")
const withAuth = require('../../utils/auth');
 
// GET all members
router.get('/', withAuth, (req, res) => {
    Member.findAll()
   .then(dbMemberData => res.json(dbMemberData))
   .catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});

// GET one member by id
router.get('/:id', withAuth, (req, res) => {
    Member.findOne({
        where: {
            id: req.params.id
        }
    })
   .then(dbMemberData => {
        if (!dbMemberData) {
            res.status(404).json({ message: 'No member found with this id' });
            return;
        }
        res.json(dbMemberData);
    })
   .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Member Login
router.post('/login', async (req, res) => {
  try {
    const memberData = await Member.findOne({ where: { email: req.body.email } });

    if (!memberData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await memberData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.member_id = memberData.id;
      req.session.logged_in = true;
      console.log("Logged in user ID: " + req.session.member_id);
      
      res.json({ member: memberData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
      req.session.destroy(() => {
      res.status(204).end();
      });
  } else {
      res.status(404).end();
  }
});


//Create new member
router.post('/signup', async (req, res) => {
    try {
        // Create new user
        const newMember = await Member.create(req.body)

        // We might want to log the user in directly after signup
        // For example, by setting some session variables
        req.session.save(() => {
          // saves member id and creates cookie session
          req.session.member_id = newMember.id;
          // saves into the cookie session that they are logged in
          req.session.logged_in = true;
          // good, signed up
          res.status(201).json(newMember);
        })

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// if we add an update option for member info, api route goes here with PUT method
module.exports = router;