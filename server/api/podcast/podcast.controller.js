'use strict'

var Podcast = require('./podcast.model');


exports.index = function(req, res) {

    console.log('Chamou a lista de podcast');
    res.status(200).json({});
}
