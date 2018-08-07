const playlistModel = require('../models/playlistModel');

module.exports = {
  getIndex(req, res, next) {
    playlistModel.findAllPlaylists()
      .then((playlists) => {
        res.locals.playlists = playlists;
        next();
      })
      .catch((err) => {
        next(err);
      });
  },
  getOne(req, res, next) {
    playlistModel.findOnePlaylist(req.params.id)
      .then((playlist) => {
        console.log(playlist);
        res.locals.playlist = playlist;
        next();
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },
  createPlaylist(req, res, next) {
    const { playlist_name, spotify_uri, created_by } = req.body;
    playlistModel.insertPlaylist({ playlist_name, spotify_uri, created_by })
      .then(() => {
        res.redirect('/playlists');
        next();
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },
  updatePlaylist(req, res, next) {
    const {
      playlistId, playlist_name, spotify_uri, created_by,
    } = req.body;

    playlistModel.updatePlaylist({
      playlistId, playlist_name, spotify_uri, created_by,
    })
      .then(() => {
        res.redirect(`/playlists/${playlistId}`);
        next();
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },
  destroyPlaylist(req, res, next) {
    playlistModel.removePlaylist(req.params.id)
      .then(() => {
        res.redirect('/playlists');
        next();
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  },
};
