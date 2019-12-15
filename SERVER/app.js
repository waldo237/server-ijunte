const config = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(cors());
app.use(express.urlencoded({extended:true}));

// declare routes
userAPI = require('./APIs/userAPI')

// user the routes
app.use('/user', userAPI)


// connect to mongo
const uri = process.env.DB_URI
mongoose.connect(uri
	, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => console.log(`connected to DataBase successfully! at ${Date(Date.now().toString())}`))
	.catch(err => console.log(`Could not connect to DataBase: ${err}`));



// run server

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Listening on port ${port}`));