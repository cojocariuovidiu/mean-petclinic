exports.index = function (req, res) {
    res.render('index', {'token': req.csrfToken()});
}