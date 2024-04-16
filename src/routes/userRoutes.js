const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/register-user', userController.registerUser);
router.patch('/update-username', userController.updateUsername);
router.patch('/update-password', userController.updatePassword);
router.delete('/delete-user', userController.deleteUser);

module.exports = router;