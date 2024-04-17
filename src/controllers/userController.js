const userService = require('../services/userService')

const registerUserController = async (req, res) => {
   const {username, password} = req.body;

   try 
   {
      await userService.registerUserService(username, password);
      console.log("User created successfully");
      res.status(201).json({ message: "User created successfully" });
   }
   catch (error) 
   {
      console.error("Error creating user", error);
      res.status(500).json({ message: error.message });
   }
}

const updateUsernameController = async (req, res) => {
   const {username, newUsername } = req.body;
   try 
   {
      await userService.updateUsernameService(username, newUsername);
      console.log("Username updated successfully");
      res.status(201).json({ message: "Username updated successfully" });
   } 
   catch (error) 
   {
      console.error("Error updating username", error);
      res.status(500).json({ message: error.message });
   }
}

const updatePasswordController = async (req, res) => {
   const {username, newPassword} = req.body;
   try 
   {
      await userService.updatePasswordService(username, newPassword);
      console.log("Password updated successfully");
      res.status(201).json({ message: 'Password updated successfully' });

   } 
   catch (err) 
   {
      console.log('Error updating Password',err);
      res.status(500).json({ message: err.message });
   }
}

const deleteUserController = async (req, res) => {
   const {username} = req.body;
   try 
   {
      await userService.deleteUserService(username);
      console.log("User deleted successfully");
      res.status(201).json({ message: 'User deleted successfully' });

   } 
   catch (err) 
   {
      console.log('Error deleting User',err);
      res.status(500).json({ message: err.message });
   }
}

module.exports = {
   registerUserController,
   updateUsernameController,
   updatePasswordController,
   deleteUserController,
}