const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/mydatabase';

app.use(express.json());

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

const UserSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', UserSchema);

app.get('/', (req, res) => res.send('🚀 Node.js + MongoDB API is running'));

app.post('/users', async (req, res) => {
  const user = await User.create({ name: req.body.name });
  res.status(201).json(user);
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
