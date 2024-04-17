const User = require('../models/User')
const bcrypt = require('bcrypt')

const registerUserService =  async (username, password) => { 
   try {
      const existsUser = await User.findOne({username});
      if (existsUser)
      {
         throw new Error("Username already exists");
      }

      const hashedPassword = await bcrypt.hash(password, 10); 
      const newUser = new User({username, password: hashedPassword });
      await newUser.save();
   }
   catch (err)
   {
     throw new Error("Error registering user " + err.message);
   }
}

const updateUsernameService = async (username, newUsername) => { 
   try 
   {
      const isUpdated = await User.findOneAndUpdate({username}, {username : newUsername});
      
      if (!isUpdated) 
      {
         throw new Error("User is not found!");
      }
   } 
   catch (err) 
   {
     throw new Error(err);
   }
}

const updatePasswordService = async (username, newPassword) => {
   try 
   {
      const newhashedPassword = await bcrypt.hash(newPassword, 10);

      const isUpdated = await User.findOneAndUpdate({username}, {password : newhashedPassword});
      if (!isUpdated) 
      {
         throw new Error("Usern is not found")
      }
   } 
   catch (err) 
   {
      throw new Error(err);
   }
}

const deleteUserService = async (username) => {
   try 
   {
      const isDeleted = await User.findOneAndDelete({username});
      if (!isDeleted) 
      {
         throw new Error("User is not found")
      }
   } 
   catch (err) 
   {
      throw new Error(err);
   }
}


module.exports = {
   registerUserService,
   updateUsernameService,
   updatePasswordService,
   deleteUserService
}

