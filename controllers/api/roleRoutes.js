const router = require('express').Router();
const { Role }=require("../../models")

// CREATE new role
router.post('/', (req, res) => {
    Role.create(req.body)
   .then(dbRoleData => res.json(dbRoleData))
   .catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});

//GET all roles
router.get('/', (req, res) => {
    Role.findAll()
   .then(dbRoleData => res.json(dbRoleData))
   .catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});

//UPDATE role
router.put('/:id', (req, res) => {
    Role.update(req.body, {
        where: {
            id: req.params.id
        }
    })
   .then(dbRoleData => {
        if (!dbRoleData) {
            res.status(404).json({ message: 'No role found with this id' });
            return;
        }
        res.json(dbRoleData);
    })
   .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;