// Require Dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

// Require Routes
const playlistRouter = require('./Routes/playlistRouter');

// Server variables
const app = express();

const PORT = process.env.PORT || 3000;

// Use middleware
app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use routes
app.use('/', playlistRouter);

// Listen on PORT
app.listen(PORT, () => {
    console.log(`Listening on ${PORT} in ${app.get('env')} mode.`);
});

module.exports = app;