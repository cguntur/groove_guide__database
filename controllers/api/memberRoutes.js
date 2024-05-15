const router = require('express').Router();
const { Member }=require("../../models")
// const withAuth = require('../../utils/auth');
 
//GET all members
router.get('/', (req, res) => {
    Member.findAll()
   .then(dbMemberData => res.json(dbMemberData))
   .catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});

//GET one member by id
router.get('/:id', (req, res) => {
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

//Create new member

router.post('/signup', async (req, res) => {
    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create new user
        const newUser = await Member.create({
            email: req.body.email,
            password: hashedPassword,
        });

        // We might want to log the user in directly after signup
        // For example, by setting some session variables

        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


module.exports = router;