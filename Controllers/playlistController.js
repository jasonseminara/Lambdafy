const playlistModel = require('../Models/playlistModel');

module.exports = {
    getIndex(req, res, next) {
        playlistModel.findAllPlaylists()
        .then((playlists) => {
            console.log(playlists);
            res.locals.playlists = playlists;
            next();
        })
        .catch((err) => {
            console.log(err);
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
    }
};