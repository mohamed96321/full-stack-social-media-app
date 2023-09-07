const express = require("express");
const userController = require("../controllers/users.js");
const isAuthMiddleware = require("../middleware/auth.js");

const router = express.Router();

/* READ */
router.get("/:id", isAuthMiddleware.verifyToken, userController.getUser);
router.get("/:id/friends", isAuthMiddleware.verifyToken, userController.getUserFriends);

/* UPDATE */
router.patch("/:id/:friendId", isAuthMiddleware.verifyToken, userController.addRemoveFriend);

module.exports = router;
