const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  // <<-- ADD THIS
app.use(express.json());

// Example route
app.post('/register', (req, res) => {
  console.log(req.body);
  res.json({ message: 'User registered successfully!' });
});

app.listen(3000, () => {
  console.log('Backend running on port 3000');
});
