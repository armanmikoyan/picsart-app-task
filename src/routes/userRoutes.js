const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/register-user', userController.registerUserController);
router.patch('/update-username', userController.updateUsernameController);
router.patch('/update-password', userController.updatePasswordController);
router.delete('/delete-user', userController.deleteUserController);

module.exports = router;