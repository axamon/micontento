const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => (
    res.sendFile(path.join(__dirname, 'public/index.htm'))
));

app.listen(port);
