const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000

// Fake Database - A collection of bounties objects(resource)
// which I've moved to bountyData.js then 
/* for example:
let bounties = [
    {
        "firstName": "Darth",
        "lastName": "Vader",
        "Living": true,
        "bountyAmount": 100,
        "type": "Sith",
        "_id": uuidv4()
    }
]
*/

// Middlewares for every request Naga Sadow
app.use(express.json()) // req.body = Object from POST and PUT requests
app.use(morgan('dev'))

// Connect to mongoDB
mongoose.connect("mongodb://localhost:27017/bounties", {useNewUrlParser: true}, () => {
    console.log("connected to the DB")
})

// Routes - Endpoints
app.use("/bounties", require('./routes/bountyRouter.js'))

// Global Server Error Handler - handles ANY thrown error from ANY of our routes above
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


/*
// GET ALL - GET COLLECTION
app.get("/bounties", (req, res) => {
    res.send(bounties)
})
*/

/*
// GET ONE - GET SINGLE RESOURCE
app.get("/bounties/:_id", (req, res) => {
    // Find the bounties with this ID in the fake DB
    const foundBounties = bounties.find(bounties => bounties._id === req.params._id)
    // Send single bounties resource(object) to front-end
    res.send(foundBounties)
})
*/

/*
// POST - INSERT ONE
app.post("/bounties", (req, res) => {
    // Get user's post object out of req.body
    const newBounty = req.body
    // Add ID to newBounty
    newBounty._id = uuidv4() // uuidv4() must NOT be in Postman
    // Add newBounty to Fake DB
    bounties.push(newBounty)
    // Send back updated DB
    res.send(bounties)
})
*/

/*
// DELETE - Delete One
app.delete("/bounties/:_id", (req, res) => {
    // Find the bounty to delete
    const bountyToDelete = bounties.find(bounty => bounty._id === req.params._id)
    // Created updated array that does not include that bounty object
    const updatedDB = bounties.filter(bounty => bounty._id !== bountyToDelete._id)
    // Re-assign database to be the updated array
    bounties = updatedDB
    res.send(bounties)
})
*/

/*
// PUT - Update One
app.put("/bounties/:_id", (req, res) => {
    // Find the bounty to update by their id
    const bountyToUpdate = bounties.find(bounty => bounty._id === req.params._id)
    // Update object with req.body to get updated bounty
    const updatedBounty = Object.assign(bountyToUpdate, req.body)
    // Map through old DB and replace old object with updated Object
    const updatedDB = bounties.map(bounty => bounty._id === updatedBounty._id ? updatedBounty : bounty)
    //  Update Database array
    bounties = updatedDB
    // Send back updated DB
    res.send(bounties)
})
*/

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})