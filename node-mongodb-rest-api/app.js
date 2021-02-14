const express = require('express');
const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();
require('dotenv/config');
const mongoose = require('mongoose');

const postRouter = require('./routes/posts');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// app.use('/posts', () => {
// 	console.log('This is middleware running');
// });

// Connect to DB
const connectionString = process.env.DB_CONNECTION;
mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
	console.log('Connected to DB');
});

// Middleware
app.use('/api/posts', postRouter);

// Start listening
app.listen(3000);
