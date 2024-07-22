const express = require('express');
const { registerUser, loginUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.delete('/deleteUser/:id', deleteUser);
router.post('/login', loginUser);

module.exports = router;
