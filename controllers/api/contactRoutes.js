const router = require('express').Router();
const { Member, Contact }=require("../../models");


// CREATE new contact
router.post('/', (req, res) => {
    console.log(req.body)
    Contact.create({
        address_1: req.body.address_1,
        address_2: req.body.address_2,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        member_id: req.session.member_id
    })
   .then(dbContactData => res.json(dbContactData))
   .catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});
// UPDATE contact
router.put('/:id', (req, res) => {
    Contact.update(req.body, {
        where: {
            id: req.params.id
        }
    })
   .then(dbContactData => {
        if (!dbContactData) {
            res.status(404).json({ message: 'No contact found with this id' });
            return;
        }
        res.json(dbContactData);
    })
   .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;


