const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Location = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    max_members: {
        type: Number
    },
    address: {
        type: String
    },
    photo_url: {
        type: String
    }
}, {
    collection: 'locations'
})

module.exports = mongoose.model('Location', Location);