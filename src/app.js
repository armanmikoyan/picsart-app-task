const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserRoutes = require('./routes/userRoutes')
 
dotenv.config();
const app = express();
app.use(express.json())
app.use('/user', UserRoutes);

(async function start() {
   try {
      await  mongoose.connect(`mongodb+srv://armanmikoyan1:${process.env.dbPassword}@db.s254iiy.mongodb.net/myapp`);
      console.log("Connected to Database")
      
      app.listen(process.env.PORT || 3000, () => {
         console.log(`Server is running on port ${process.env.PORT || 3000}`);
      });
   } catch (error) {
      console.error('Error connecting to MongoDB:\n', error);
   }
})();




