const Post = require('../models/Post')
const User = require('../models/User')

const post = async (username, title, body) => { 
   try 
   {
      const user = await User.findOne({username});
      if (!user)
      {
         throw new Error("User doesn't exists");
      }

   
      const post = new Post({title, body});
      await post.save();
    
      user.posts.push(post._id);
      await user.save();
   }
   catch (err)
   {
     throw new Error("Error Posting user " + err.message);
   }
}

const deletePost = async (username, postId) => { 
   try 
   {
      const user = await User.findOne({username});
      if (!user)
      {
         throw new Error("User doesn't exists");
      }

      const postIndex = user.posts.findIndex(post => post.toString() === postId);
      if (postIndex === -1) {
         return { success: false, message: "User doesn't have this post" };
      }

      user.posts.splice(postIndex, 1);
      await user.save();

   }
   catch (err)
   {
     throw new Error("Error Posting user " + err.message);
   }
}

const updatePost = async (username, postId, newPostTitle, newPostBody) => { 
   try 
   {
      const user = await User.findOne({username});
      if (!user)
      {
         throw new Error("User doesn't exists");
      }

      const postIndex = user.posts.findIndex(post => post.toString() === postId);
      if (postIndex === -1) {
         return { success: false, message: "User doesn't have this post" };
      }

      const postToUpdate = await Post.findById(postId);
      if (!postToUpdate) {
         return { success: false, message: "Post not found" };
      }
      postToUpdate.title = newPostTitle;
      postToUpdate.body = newPostBody;
      await postToUpdate.save();
      return { success: true, message: "Post updated successfully" };

   }
   catch (err)
   {
     throw new Error("Error Posting user " + err.message);
   }
}


module.exports = {
   post,
   deletePost,
   updatePost
}