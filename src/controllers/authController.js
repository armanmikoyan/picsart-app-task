const authService = require('../services/authService')

let loggedInUsers = [];

const loginController = async (req, res) => {
   const  {username, password} = req.body;
   try 
   {
      if (loggedInUsers.includes(username))
      {
         res.json({message: `${username} already logged in`});  
         return;
      }
      const token = await authService.loginService(username, password);
      res.json({message: `Welcome ${username}`, token});
      loggedInUsers.push(username)
      console.log("Logged in successfully")
   }
   catch (error)
   {
      console.error('Error logging in:', error);
      res.status(401).json({ message: error.message });
   }
}

const logoutController = async (req, res) => {
   try 
   {
      const {username} = req.body
      authService.logoutService();
      let index = loggedInUsers.indexOf(username) 
      if (index !== -1)
      {
         loggedInUsers.splice(index, 1);
      }
      res.json({ message: 'Logged out successfully' });      
   }
   catch (error)
   {
      console.error('Error logging out:', error);
      res.status(500).json({ message: 'Internal server error' });
   }
}

module.exports = 
{
   loginController,
   logoutController,
}