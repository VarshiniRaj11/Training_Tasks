// server.js
const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config()
const cors = require('cors');
const bcrypt=require('bcrypt');

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

mongoose
 .connect(process.env.CONNECTION_STRING)
 .then(()=> console.log("Connected to MongoDB"))
 .catch((err)=>console.log(er));


app.listen(PORT,()=>console.log(`Listening at ${PORT}`));

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    password:String,
  });
  
  const User = mongoose.model('User', userSchema);
  
  app.get('/', async (req, res) => {
      res.send("connected to the backend");
  });

  // API endpoint to fetch all users
  app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // API endpoint to create a new user
  app.post('/api/users', async (req, res) => {
    try {
      const { firstName, lastName, email, phone, address, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        phone,
        address,
        password: hashedPassword,
      });
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  // API endpoint to update a user
  app.put('/api/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const { firstName, lastName, email, phone, address, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          firstName,
          lastName,
          email,
          phone,
          address,
          password: hashedPassword,
        },
        { new: true }
      );
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // API endpoint to delete a user
  app.delete('/api/users/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });