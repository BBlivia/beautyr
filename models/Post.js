const mongoose = require("mongoose");
//const { db } = require("./Comment");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "This field is required",
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  serviceProvider:{
    type:String,
    require:true
  },
  servie:{
    type: String,
    require:true
  },
  location:{
    type: String,
    require: true
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdByUsername: {
    type: String,
    ref: "User"
  },
  
  createdAt: {
    type: Date,
    default: Date.now,
  },
 
});


PostSchema.index({title: 'text' })


module.exports = mongoose.model("Post", PostSchema);
