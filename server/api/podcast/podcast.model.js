var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        titulo: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        dataInclusao: {
            type: Date,
            required: true
        }
    });

    return mongoose.model('Podcast', schema);
}
