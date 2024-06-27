const express = require('express');
const cors = require('cors');

// const downloadYT = require('./Controllers/downloadYT');
const downloadController = require('./Controllers/downloadController');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Welcome to the YTD');
});

// app.get('/download', downloadYT);
app.get('/download', downloadController);

app.listen(4000, () => {
    console.log('Server is running on PORT: 4000');
});
