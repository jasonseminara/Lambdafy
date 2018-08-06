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

const redirect = (req, res) => {
    res.redirect('/playlists');
};

const redirectCreate = (req, res) => {
    const { playlist_name, spotify_uri } = res.locals.new;
    res.redirect(`/playlists/${playlist_name, spotify_uri}`);
};

// playlistRouter.get('/', (req, res) => {
//     res.send('Hello World!');    
// });

// Create
playlistRouter.route('/new')
.get(
    playlistController.getIndex,
    viewController.create,
);

// Item
playlistRouter.route('/:id')
.get(
    playlistController.getOne,
    viewController.showOne,
    showJSON,
)
.delete(
    playlistController.destroyPlaylist,
    viewController.delete,
    showJSON,
    redirect,
)
.put(
    playlistController.updatePlaylist,
    showJSON,
    redirect,
);

// Collection
playlistRouter.route('/')
.get(
    playlistController.getIndex,
    viewController.showAll,
    showJSON,
)
.post(
    playlistController.createPlaylist,
    viewController.create,
    redirect,
);

module.exports = playlistRouter;