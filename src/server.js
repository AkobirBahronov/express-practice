const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

module.exports = app;
