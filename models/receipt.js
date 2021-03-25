const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {type: String},
    description: {type: String},
    cooking: [{
        step: {type: String}
    }],
    pictures: [{type: String}],
    ingredient: [{
        igr_name: {type: String},
        unit: {type: String},
        value: {type: String},
        type: {type: String}
    }]
})

module.exports = mongoose.model('Receipt', schema, 'receipts');