require('dotenv').config();

const dbConnection = process.env.MONGODB_PASSWORD;

console.log(dbConnection);