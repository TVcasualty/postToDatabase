// require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
// const db = process.env.DB_URI;
const path = require('path');

app.use(express.json());

mongoose
	.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.log(err));

app.use('/api/items', require('./routes/api/routes'));
app.use('/api/users', require('./routes/api/users'));

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('client/build'))
	app.get('*', (req,res)=>{
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is up and running on port ${port}`));
