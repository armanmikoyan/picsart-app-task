const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User.js')

const loginService = async (username, password) => {
   try 
   {
      const user = await User.findOne({username})

      if (!user)
      {
         throw new Error("Invalid username or password");
      }
   
      const isMatch = await bcrypt.compare(password, user.password);
   
      if (!isMatch)
      {
         throw new Error("Invalid username or password");
      }

      const token = jwt.sign({ username: user.username, userId: user._id}, process.env.JWT_SECRET, { expiresIn: '3h' });
      user.token = token;
      await user.save();
      return token;
   }
   catch (error)
   {  
      throw new Error("Error logging in: " + error.message);
   }
}

const logoutService = () => {
   console.log("Logout successfully")
}

module.exports = {
   loginService,
   logoutService
}