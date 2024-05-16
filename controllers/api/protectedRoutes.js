// File: routes/protectedRoutes.js

const express = require('express');
const router = express.Router();
const withAuth = require('../../utils/auth');

// Define a protected route
router.get('/profilepage', withAuth, (req, res) => {
    res.send('Welcome to your dashboard!');
});

module.exports = router;
