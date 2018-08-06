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
        WHERE playlistId = $1
        `, id);
    },
    insertPlaylist(playlist) {
        return db.one(`
        INSERT INTO playlists (playlist_name, spotify_uri) 
        VALUES ($/playlist_name/, $/spotify_uri/) 
        RETURNING *`, playlist);
    }
};