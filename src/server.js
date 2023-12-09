const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors()); // เพิ่มนี้
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://resQ:resQmongo@cluster1.6m6nsty.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  category: String,
  prefix: String,
  name: String,
  lastname: String,
  id: String,
  address: String,
  tel: String,
  email: String,
  passid: String,
});

const User = mongoose.model('User', userSchema);

// API Endpoint for User Registration
app.post('/api/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
