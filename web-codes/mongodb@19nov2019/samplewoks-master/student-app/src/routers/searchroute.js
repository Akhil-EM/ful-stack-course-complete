const express = require('express');

var searchroute = express.Router();

function router(nav) {
    searchroute.route('/').
    get((req, res) => {
        res.render('search', { nav })
    });
    return searchroute;
}

module.exports = router;