const express = require('express');
const { getBlogs,getUserBlogs,createBlog } = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/getBlogs',authMiddleware, getBlogs);
router.get('/getUserBlogs',authMiddleware, getUserBlogs);
router.post('/createBlog',authMiddleware, createBlog);


module.exports = router;
    