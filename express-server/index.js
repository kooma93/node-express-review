const express = require('express');
const path = require('path');
const parser = require('body-parser');
const routes = require('./routes');
const PORT = 3000;

const app = express();

app.use(parser.json()); // takes in incoming data and parses to json file
app.use(parser.urlencoded({ extended: true })); // false restricts

app.use(express.static(path.resolve(__dirname, '../static')));

app.use('/api', routes)

app.listen(PORT, () => console.log('app is listening to PORT', PORT));