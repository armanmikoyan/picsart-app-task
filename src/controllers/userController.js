const userService = require('../services/userService')

exports.registerUser = async (req, res) => {
   const {username, password} = req.body;

   try {
      await userService.registerUser(username, password);
      console.log("User created successfully");
      res.status(201).json({ message: "User created successfully" });
   }
   catch (error) {
      console.error("Error creating user", error);
      res.status(500).json({ message: error.message });
   }
}

exports.updateUsername = async (req, res) => {
   const {username, newUsername } = req.body;
   try {
      await userService.updateUsername(username, newUsername);
      console.log("Username updated successfully");
      res.status(201).json({ message: "Username updated successfully" });
   } catch (error) {
      console.error("Error updating username", error);
      res.status(500).json({ message: error.message });
   }
}

exports.updatePassword = async (req, res) => {
   const {username, newPassword} = req.body;
   try {
      await userService.updatePassword(username, newPassword);
      console.log("Password updated successfully");
      res.status(201).json({ message: 'Password updated successfully' });

   } catch (err) {
      console.log('Error updating Password',err);
      res.status(500).json({ message: err.message });
   }
}

exports.deleteUser = async (req, res) => {
   const {username} = req.body;
   try {
      await userService.deleteUser(username);
      console.log("User deleted successfully");
      res.status(201).json({ message: 'User deleted successfully' });

   } catch (err) {
      console.log('Error deleting User',err);
      res.status(500).json({ message: err.message });
   }
}





