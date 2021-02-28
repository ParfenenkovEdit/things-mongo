const { Schema, model } = require('mongoose');

const thingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: [
        {
            key: String,
            value: String
        }
    ],
    _deletedAt: {
        type: Date,
        default: null
    }
});

module.exports = model('thing', thingSchema);
