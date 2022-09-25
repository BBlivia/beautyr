
const Comment = require("../models/Comment");

module.exports = {

  createComment: async (req, res) => {
    try {

      await Comment.create({
        comment: req.body.comment,
        post: req.params.id,
        // likes and user
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },

  likeComment: async (req, res) => {
    try {
      await Comment.updateOne(
        { _id: req.params.commentid },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect("/post/"+req.params.postid);
    } catch (err) {
      console.log(err);
    }
  },


  deleteComment: async (req, res) => {
    try {
      await Comment.deleteOne({_id: req.params.commentid})  
      res.redirect("/post/"+req.params.postid)  //page refreshes but with our comment gone
    } catch (err) {
      //res.redirect("/profile");
      console.log(err)
    }
  },
};