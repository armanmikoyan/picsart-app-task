const express = require('express');
const router = express.Router();
const authController = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/post', authMiddleware, authController.postController);
router.delete('/delete-post', authMiddleware, authController.deletePostController);
router.patch('/update-post', authMiddleware, authController.updatePostController);

module.exports = router;