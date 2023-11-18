const mongoose = require('mongoose')

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        require: true,
    },
    launchDate: {
        type: Date,
        require: true,
    },
    mission: {
        type: String,
        require: true,
    },
    rocket: {
        type: String,
        require: true,
    },
    target: {
        type: String,
    },
    customers: [String],
    upcoming: {
        type: Boolean,
        require: true,
    },
    success: {
        type: Boolean,
        require: true,
        default: true,
    }
});

module.exports = mongoose.model('Launch', launchesSchema)