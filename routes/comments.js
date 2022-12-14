const express = require("express");
const router = express.Router();

const commentsController = require("../controllers/comments");
//const commentController = ("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


//Post Routes - simplified for now
//router.get("/:id", ensureAuth, postsController.getPost);
//router.get("/getComments/:id", commentsController.getComments)
router.post("/createComment/:id", commentsController.createComment);
router.delete('/deleteComment/:postid/:commentid', commentsController.deleteComment) 
router.put('/likeComment/:postid/:commentid', commentsController.likeComment) 


//router.put("/likePost/:id", postsController.likePost);

//router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
