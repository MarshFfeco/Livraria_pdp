exports.index = function(req, res) {
    res.send(req.query.search)
}