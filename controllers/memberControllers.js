// controllers/memberController.js
const express = require('express');
const router = express.Router();

// Route to render the form for adding a member
router.get('/members/add', (req, res) => {
    res.render('addMember'); 
    // RaddMember.handlebars template
});

// Route to render the form for updating a member
router.get('/members/update/:id', (req, res) => {
    // Fetch member data from database based on :id parameter
    const memberId = req.params.id;
    const member = /* Fetch member data from database using memberId */;
    res.render('updateMember', { member }); 
    // updateMember.handlebars template with member data
});

// Route to handle form submission for adding a member
router.post('/members/add', (req, res) => {
    // Process form submission to add a member to the database
    const { firstName, lastName, email, phone } = req.body;
    // Add member to the database (code logic to be implemented)
    res.redirect('/homepage'); 
    // Redirect to homepage or any other page after adding member
});

// Route to handle form submission for updating a member
router.post('/members/update/:id', (req, res) => {
    // Process form submission to update member information in the database
    const memberId = req.params.id;
    const { firstName, lastName, email, phone } = req.body;
    // Update member in the database (code logic to be implemented)
    res.redirect('/homepage'); 
    // Redirect to homepage or any other page after adding member
});

module.exports = router;