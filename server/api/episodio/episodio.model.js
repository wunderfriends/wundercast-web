var mongoose = require('mongoose');

module.exports = function() {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        numero: {
            type: Number,
            required: true
        }
        descricao: {
            type: String,
            required: true
        },
        duracao: {
          type: String,
          required: true
        }
        dataPublicacao: {
            type: Date,
            required: true
        }
    });

    return mongoose.model('Episodio', schema);
}
