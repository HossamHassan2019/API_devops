const express = require('express');
const app = express();

// Use the port provided by the environment or default to 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get('/msg', (req, res) => {
    res.json({"message": "My first API"});
});

app.use(express.json());

app.post('/msg', (req, res) => {
    const message = req.body.message;
    res.json({"receivedMessage": message});
});
