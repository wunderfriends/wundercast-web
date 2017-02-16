'use strict'

var Podcast = require('./podcast.model');


exports.index = function(req, res) {

    Podcast.find(function (err, podcasts) {
      if (err) {
        return handleError(res, err)
      }
      return res.status(200).json({ results: podcasts })
    })
}
