const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User'); 

const app = express();
app.use(cors());
app.use(express.json());



const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
    console.error('❌ MONGO_URI is not defined. Check your docker-compose.yml!');
    process.exit(1);
}

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Handle form submission
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    console.log('Received:', req.body);
    try {
        const newUser = new User({ name, email, password });
        const test = await newUser.save();
        console.log('savedUser', test);
        console.log('✅ User saved to DB');
        res.status(200).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error('❌ Error saving user:', err);
        res.status(500).json({ message: 'Error registering user' });
    }
});



app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching users' });
    }
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
