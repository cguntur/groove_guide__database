const router = require('express').Router();
const contactRoutes = require('./contactRoutes');
const memberRoutes = require('./memberRoutes');
const roleRoutes = require('./roleRoutes');

router.use('/contacts', contactRoutes);
router.use('/member', memberRoutes);
router.use('/role', roleRoutes);

module.exports = router;

