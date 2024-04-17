const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
   const token = req.headers["authorization"];
   if (!token) 
   {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
   }
   try 
   {
      jwt.verify(token, process.env.JWT_SECRET)
      next(); 
   } 
   catch (err)
   {
      console.log(err.message)
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
   }
};

module.exports = authMiddleware;
