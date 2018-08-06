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
    },
    updatePlaylist(id, playlistData) {
        return db.one(`
        UPDATE playlists 
        SET 
        playlist_name = $2,
        spotify_uri = $3 
        WHERE playlistId = $1 
        RETURNING *
        `, [id, playlistData.playlist_name, playlistData.spotify_uri]);
    },
    removePlaylist(id) {
        return db.none(`
        DELETE FROM playlists 
        WHERE playlistId = $1
        `, id);
    }
};