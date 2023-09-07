const express = require("express");
const postController = require("../controllers/posts.js");
const isAuthMiddleware = require("../middleware/auth.js");

const router = express.Router();

/* READ */
router.get("/", isAuthMiddleware.verifyToken, postController.getFeedPosts);
router.get("/:userId/posts", isAuthMiddleware.verifyToken, postController.getUserPosts);

/* UPDATE */
router.patch("/:id/like", isAuthMiddleware.verifyToken, postController.likePost);

module.exports = router;
