const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path') 
const PORT = process.env.PORT || 7000

// Middlewares for every request Naga Sadow
app.use(express.json()) // req.body = Object from POST and PUT requests
app.use(morgan('dev'))
// For Heroku deployment (VERY important):
app.use(express.static(path.join(_dirname, "client", "build")))

// Connect to mongoDB
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost:27017/bounties", {useNewUrlParser: true}, () => {
    console.log("connected to the DB")
})

// Routes - Endpoints
app.use("/bounties", require('./routes/bountyRouter.js'))

// Global Server Error Handler - handles ANY thrown error from ANY of our routes above
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})