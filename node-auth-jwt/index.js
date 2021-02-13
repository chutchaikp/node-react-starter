const express = require('express');
const app = express();
require('dotenv').config();

//#region Connect to DB
const mongoose = require('mongoose');

const user = process.env.MONGODB_ACCOUNT;
const database = process.env.MONGODB_DATABASE;
const password = process.env.MONGODB_PASSWORD;

const DATABASE_URL = `mongodb+srv://${user}:${password}@cluster0.mys2g.mongodb.net/${database}?retryWrites=true&w=majority`;
mongoose.connect(DATABASE_URL,
	{ useUnifiedTopology: true, useNewUrlParser: true },
	() => {
		console.log('Connected to MongoDB');
	});
//#endregion

const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

app.use(express.json());

app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3000, () => {
	console.log('Server listening on PORT 3000');
});