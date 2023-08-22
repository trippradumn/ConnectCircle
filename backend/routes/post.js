const express=require('express');
const {createPost, likeAndUnlikePost,deletePost,getPostOfFollowing, updateCaption,commentOnPost ,deleteComment}=require("../controllers/post");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.route("/post/upload").post(isAuthenticated, createPost);
router.route("/post/:id")
.post(isAuthenticated,likeAndUnlikePost)
.put(isAuthenticated,updateCaption)
.delete(isAuthenticated, deletePost);
router.route("/posts").get(isAuthenticated, getPostOfFollowing);
router.route("/posts").get(isAuthenticated, getPostOfFollowing);
router.route("/post/comment/:id").put(isAuthenticated, commentOnPost);
router.route("/post/comment/:id")  .delete(isAuthenticated, deleteComment);
module.exports = router;