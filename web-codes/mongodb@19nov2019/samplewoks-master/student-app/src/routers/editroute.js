const express = require('express');

var editroute = express.Router();

function router(nav) {
    editroute.route('/').
    get((req, res) => {
        res.render('edit', { nav })
    });
    return editroute;
}

module.exports = router;