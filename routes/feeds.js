const express = require("express");
const feeds = require('../controllers/feeds');
const router = express.Router();

router.get('/posts',feeds.getPosts);

module.exports = router;
