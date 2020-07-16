require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = process.env.DB_URI;
const items = require('./routes/routes');

app.use(express.json());

mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to salt data base'))
	.catch(err => console.log(err));

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is up and running on port ${port}`));
