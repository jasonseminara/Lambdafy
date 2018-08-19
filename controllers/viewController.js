module.exports = {
  showAll(req, res) {
    res.format({
      html() {
        res.render('../views/index.ejs');
      },
      json() {
        res.json(res.locals.playlists);
      },
    });
  },
  showOne(req, res) {
    res.format({
      html() {
        res.render('playlists/showOnePlaylist');
      },
      json() {
        res.json(res.locals.playlist);
      },
    });
  },
  create(req, res) {
    res.format({
      html() {
        res.render('playlists/createPlaylist');
      },
      json() {
        res.json(res.locals.new);
      },
    });
  },
  update(req, res) {
    res.format({
      html() {
        res.render('playlists/updatePlaylist');
      },
      json() {
        res.json(res.locals.updated);
      },
    });
  },
  deleteMe(req, res) {
    res.format({
      html() {
        res.render('playlists/deletePlaylist');
      },
      json() {
        res.json(res.locals.deleted);
      },
    });
  },
};
