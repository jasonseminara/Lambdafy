module.exports = {
    showAll(req, res) {
        res.format({
            html() {
                res.render('Playlists/showAllPlaylists');
            },
            json() {
                res.json(res.locals.playlists);
            }
        });
    },
    showOne(req, res) {
        res.format({
            html() {
                res.render('Playlists/showOnePlaylist');
            },
            json() {
                res.json(res.locals.playlist);
            }
        });
    }
};