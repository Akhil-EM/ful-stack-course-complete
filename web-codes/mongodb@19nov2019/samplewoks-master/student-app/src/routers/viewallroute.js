const express = require('express');

var viewallroute = express.Router();

function router(nav) {
    viewallroute.route('/').
    get((req, res) => {
        res.render('viewall', { nav })
    });
    return viewallroute;
}

module.exports = router;