const postService= require('../services/postService')

const postController = async (req, res) => {
   const {username, title, body} = req.body;

   try 
   {
      await postService.post(username, title, body);
      console.log("Posted!!!");
      res.status(201).json({ message: "Posted!!!" });
   }
   catch (error) 
   {
      console.error("Error Posting", error);
      res.status(500).json({ message: error.message });
   }
}

const deletePostController = async (req, res) => {
   const {username, postId} = req.body;

   try 
   {
      await postService.deletePost(username, postId);
      console.log("Post Deleted!!!");
      res.status(201).json({ message: "Deleted!!!" });
   }
   catch (error) 
   {
      console.error("Error Deleting", error);
      res.status(500).json({ message: error.message });
   }
}

const updatePostController = async (req, res) => {
   const {username, postId, newPostTitle, newPostBody} = req.body;

   try 
   {
      await postService.updatePost(username, postId, newPostTitle, newPostBody);
      console.log("Post Updated!!!");
      res.status(201).json({ message: "Updated!!!" });
   }
   catch (error) 
   {
      console.error("Error Updating", error);
      res.status(500).json({ message: error.message });
   }
}



module.exports = {
   postController,
   deletePostController,
   updatePostController
}