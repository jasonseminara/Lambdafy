// Require Express && Controllers && Views
const express = require('express');
const playlistController = require('../Controllers/playlistController');
const viewController = require('../Controllers/viewController');

// Use Router
const app = express();
const playlistRouter = express.Router();
// const playlistRouter = express();

// Send messages
const showJSON = (req, res) => {
    res.json(res.locals.data);
};

const redirectCreate = (req, res) => {
    res.redirect('/playlists');
};

// playlistRouter.get('/', (req, res) => {
//     res.send('Hello World!');    
// });

// Create
playlistRouter.route('/new')
.get(playlistController.getIndex, viewController.showAll, showJSON)
.post(playlistController.createPlaylist, viewController.create, showJSON, redirectCreate);

// Item
playlistRouter.route('/:id')
.get(playlistController.getOne, viewController.showOne, showJSON);

// Collection
playlistRouter.route('/')
.get(playlistController.getIndex, viewController.showAll, showJSON);

module.exports = playlistRouter;