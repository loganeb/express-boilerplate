const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
const config = require('./config');
const router = require('./routers/main.router');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));

mongoose.connect(config.db, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('connected', () => {
    console.log('Mongoose connected to database...');
})
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.listen(PORT, (err) => {
    if(err) return console.log('Server error: ', err);
    console.log(`Listening on port ${PORT}...`);
})

router(app);

module.exports = app;