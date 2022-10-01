exports.index = function(req, res) {
    res.render("book", {
        title: "book/:id"
    })
};