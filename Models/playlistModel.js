const db = require('../Config/dbConnection');

module.exports = {
    findAllPlaylists() {
        return db.many(`
        SELECT * 
        FROM playlists`);
    },
    findOnePlaylist(id) {
        return db.one(`
        SELECT * 
        FROM playlists 
        WHERE id = $1
        `, id);
    }
};