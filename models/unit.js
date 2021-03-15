const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
     unit_arr_sol: [{type: String, required: true}],
     unit_arr_liq: [{type: String, required: true}],
     unit_arr_blk: [{type: String, required: true}],
     unit_arr_const: [{type: String, required: true}],
     comp: [{ 
        name: {type: String, required: true},
        adress: {type: String, required: true}
    }]

})

module.exports = mongoose.model('Unit', schema, 'units');