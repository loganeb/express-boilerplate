const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./routers/main.router');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
const db = mongoose.connect(config.db, {useNewUrlParser: true});
mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to database...');
})

app.listen(PORT, (err) => {
    if(err) return console.log('Server error: ', err);
    console.log(`Listening on port ${PORT}...`);
})

router(app);

module.exports = app;