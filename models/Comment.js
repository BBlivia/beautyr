const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
 comment: {
    type: String,
    required: true,
  },
  
  likes: {
    type: Number,
    required: false,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdByUsername: {
    type: String,
    ref: "User"
  },

  createdById: {  //compares username Id with loged in user Id in order to determine if delete button will be visable
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
  

 

});



module.exports = mongoose.model("Comment", CommentSchema);
