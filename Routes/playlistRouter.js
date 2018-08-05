// Require Express && Controllers && Views
const express = require('express');
const playlistController = require('../Controllers/playlistController');
const indexViewController = require('../Controllers/viewController');

// Use Router
const app = express();
const playlistRouter = express.Router();
// const playlistRouter = express();

// Send messages
const showJSON = (req, res) => {
    res.json(res.locals.data);
};

// playlistRouter.get('/', (req, res) => {
//     res.send('Hello World!');    
// });

// Item
playlistRouter.route('/:id')
.get(playlistController.getOne, indexViewController.showOne, showJSON);

// Collection
playlistRouter.route('/')
.get(playlistController.getIndex, indexViewController.showAll, showJSON);

module.exports = playlistRouter;