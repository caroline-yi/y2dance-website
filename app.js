// app.js

const path = require('path');
const express = require('express');
const app = express();

const dir = path.join(__dirname);

app.use(express.static(dir));

app.listen(3000, () => console.log('Listening on http://localhost:3000/'));