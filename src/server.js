const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors({origin: 'http://localhost:3000'}));
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

app.post('/api/login', async (req, res) => {
  console.log('Request Body:', req.body);
  const { email, password } = req.body;

  try {
    // ตรวจสอบว่ามีผู้ใช้ใน MongoDB ที่มี email และ password ตรงกับที่รับมา
    const user = await User.findOne({ email, passid: password });
    console.log('User:', user);

    if (user) {
      // ถ้ามีผู้ใช้, ส่งข้อมูลกลับไปยัง client
      res.status(200).json({ message: 'Login successful' });
    } else {
      // ถ้าไม่พบผู้ใช้, ส่งข้อความว่า Login failed
      res.status(401).json({ message: 'Login failed' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// เพิ่ม Endpoint สำหรับดึงข้อมูลผู้ใช้
app.get('/api/user', async (req, res) => {
  try {
    // ดึงข้อมูลผู้ใช้จาก MongoDB และส่งกลับไปยัง client
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
