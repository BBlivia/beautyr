const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment"); //loading comment model
const UserSchema = require("../models/User")
const { response, request } = require("express");
const { ObjectID } = require("mongodb");
const { post } = require("../routes/comments");
//add another controller for comments 

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  gotoAccount: async (req, res) => {
    try {
     
      const posts = await Post.find({ user: req.user.id })
      

      res.render("account.ejs", { posts:post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean()
      console.log(posts)
      var users = []
      for(i in posts){
        var user = await UserSchema.findById(posts[i].user)
        users.push(user.userName)
       

       

     
    }
      res.render("feed.ejs", { posts: posts, name:users, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },


  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id)
      const comments = await Comment.find({post: req.params.id}).sort({ createdAt: "desc" }).lean();
     
      const posts = await Post.find().sort({ createdAt: "desc" }).lean()
      console.log(posts)
      var users = []
      for(i in posts){
        var user = await UserSchema.findById(posts[i].user)
        users.push(user.userName)
        console.log(users)
      }

      res.render("post.ejs", { post: post, posts:posts, user: req.user, comments: comments, userName: users });
     
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      const postUser = await User.findById(req.user)
      await Post.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        service :req.body.service,
        caption: req.body.caption,
        serviceProvider: req.body.serviceProvider,
        location:req.body.location,
        likes: 0,
        user: req.user.id,
        createdBy: postUser.userName
      
      });
    
      console.log("Post has been added!");
     
      res.redirect("/feed");
    } catch (err) {
      console.log(err);
    }
  },


    

    
  
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },

  searchPost: async(req, res) =>{
    try {
      let searchTerm = req.body.searchTerm;
      let posts = await Post.find({ $text: { $search: searchTerm, $diacriticSensitive: true } });
      //res.json(post)
      console.log(posts)
      res.render("search.ejs", { serviceProvider: "beauty review - Search", posts });
    } catch (error) {
      //res.satus(500).send({message: error.message || "Error Occured" });
    }
  
  },
    likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
    }, 
    
};

