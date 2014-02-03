/**
 * Simple route to render the main SPA page (index.html)
 * @param req the request object.
 * @param res the response object.
 */
exports.index = function (req, res) {
    res.render('index', {'token': req.csrfToken()});
}