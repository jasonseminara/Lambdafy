// Require Express && Controllers && Views
const express = require('express');
const playlistController = require('../Controllers/playlistController');
const indexViewController = require('../Controllers/viewController');

// Use Router
const app = express();
const playlistRouter = express.Router();
// const playlistRouter = express();

// Send messages
// const showJSON = (req, res) => {
//     res.json(res.locals.data);
// };

playlistRouter.get('/', (req, res) => {
    res.send('Hello World!');    
});

playlistRouter.route('/playlists')
.get(playlistController.index, indexViewController.showAll);

playlistRouter.route('/users')
.get(playlistController.index2, indexViewController.showAll);

module.exports = playlistRouter;