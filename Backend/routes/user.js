const express = require('express');
const router = express.Router();
const { getProfile, getAllUsers } = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

router.get('/profile', authMiddleware, getProfile);
router.get('/users', authMiddleware, adminMiddleware, getAllUsers);

module.exports = router;
