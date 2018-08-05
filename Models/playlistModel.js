const db = require('../Config/dbConnection');

module.exports = {
    findPlaylists() {
        return db.many(`
        SELECT * 
        FROM playlists`);
    },
    findUsers() {
        return db.many(`
        SELECT * 
        FROM users`);
    }
};