const express = require('express');
const axios = require('axios');
const app = express();
const config = require('../config');
const db = require('../db');
const controller = require('../controller');
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`)
});

app.use(express.static('client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/leaderboard', (req, res) => {})

module.exports = app;