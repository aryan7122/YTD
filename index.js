const express = require('express');
const cors = require('cors');

const downloadController = require('./Controllers/downloadController');

const app = express();
app.use(cors());

app.get('/download', downloadController);

app.listen(4000, () => {
    console.log('Server is running on PORT: 4000');
});
