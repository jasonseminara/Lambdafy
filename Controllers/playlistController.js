const playlistModel = require('../Models/playlistModel');

module.exports = {
    index(req, res, next) {
        playlistModel.findPlaylists()
        .then((playlists) => {
            console.log(playlists);
            res.locals.playlists = playlists;
            next();
        })
        .catch((err) => {
            next(err);
            console.log(err);        
        });
    },
    index2(req, res, next) {
        playlistModel.findUsers()
        .then((users) => {
            console.log(users);
            res.locals.users = users;
            next();
        })
        .catch(err => next(err));
    }
};