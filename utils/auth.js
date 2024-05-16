// File: utils/auth.js
const withAuth = (req, res, next) => {
  if (req.session.logged_in) {
    next();
    return;
  }

  res.status(401).json({ message: 'You need to be logged in to view this page!' });
};

module.exports = withAuth;

  

