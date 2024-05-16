const router = require('express').Router();
const { Member, Contact }=require("../../models");


// CREATE new contact
router.post('/', (req, res) => {
    Contact.create(req.body)
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


