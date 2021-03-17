const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    login: {type: String, required: true, unique: true},
    links: [{type: mongoose.Types.ObjectId, ref: 'Link'}]
})

module.exports = mongoose.model('User', schema, 'users');