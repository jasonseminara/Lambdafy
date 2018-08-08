// Require Express && Controllers && Views
const express = require('express');
const playlistController = require('../controllers/playlistController');
const viewController = require('../controllers/viewController');

// Use Router
const playlistRouter = express.Router();
// const playlistRouter = express();

// Send messages
const showJSON = (req, res) => {
  res.json(res.locals.data);
};

const redirect = (req, res) => {
  res.redirect('http://localhost:3000/playlists');
};

// playlistRouter.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// Delete
playlistRouter.route('/:id/delete')
  .get(
    playlistController.destroyPlaylist,
    viewController.deleteMe,
  );
// playlistRouter.route('/remove')
// .get(
//     playlistController.destroyPlaylist,
//     viewController.deleteMe,
// );

// Update
playlistRouter.route('/:id/edit')
  .get(
    playlistController.getOne,
    viewController.update,
    showJSON,
  );
// playlistRouter.route('/edit')
// .get(
//     playlistController.updatePlaylist,
//     viewController.update,
//     showJSON,
// );

// Create
playlistRouter.route('/new')
  .get(
    playlistController.getIndex,
    viewController.create,
    showJSON,
  );

// Item
playlistRouter.route('/:id')
  .get(
    playlistController.getOne,
    viewController.showOne,
    showJSON,
  )
  .put(
    playlistController.updatePlaylist,
    viewController.update,
    showJSON,
  )
  .delete(playlistController.destroyPlaylist);

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
    showJSON,
  );

module.exports = playlistRouter;
