module.exports = {
    showAll(req, res) {
        res.format({
            html() {
                res.render('index');
            },
            json() {
                res.json(res.locals.data);
            }
        });
    }
};