const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        default: true
    },
    type: {
        type: String,
        required: true
        // enum: ["sith", "jedi"]
    },
    bountyAmount: {
        type: Number,
        required: false
    }
})
                            // Model Name    // Model Blueprint
module.exports = mongoose.model("Bounty", bountySchema)
