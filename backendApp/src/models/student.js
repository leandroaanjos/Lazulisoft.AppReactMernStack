const mongoose = require("mongoose");

let studentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    enrollNr: {
        type: Number
    }
}, {
    collection: 'students'
});

module.exports = mongoose.model('Student', studentSchema);