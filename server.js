const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

mongoose.connect('mongodb://localhost:27017/socialNetworkDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`API server running on port ${PORT}!`));