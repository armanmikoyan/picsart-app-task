const User = require('../models/User')

exports.registerUser =  async (username, password) => { 
   try {
      const existsUser = await User.findOne({username});
      if (existsUser)
      {
         throw new Error("Username already exists");
      }

      const newUser = new User({username, password});
      await newUser.save();
   }
   catch (err)
   {
     throw new Error("Error registering user");
   }
}

exports.updateUsername = async (username, newUsername) => { 
   try {
      const isUpdated = await User.findOneAndUpdate({username}, {username : newUsername});
      
      if (!isUpdated) {
         throw new Error("User is not found!");
      }
   } catch (err) {
     throw new Error(err);
   }
}

exports.updatePassword = async (username, newPassword) => {
   try {
      const isUpdated = await User.findOneAndUpdate({username}, {password : newPassword});
      if (!isUpdated) {
         throw new Error("Usern is not found")
      }
   } catch (err) {
      throw new Error(err);
   }
}

exports.deleteUser = async (username) => {
   try {
      const isDeleted = await User.findOneAndDelete({username});
      if (!isDeleted) {
         throw new Error("User is not found")
      }
   } catch (err) {
      throw new Error(err);
   }
}



