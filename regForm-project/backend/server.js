const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    console.log('Received registration:', { username, email, password });
    res.json({ message: `User ${username} registered successfully!` });
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
