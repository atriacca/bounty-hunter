const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')


// GET All
bountyRouter.get("/", (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})
//bountyRouter.get("/", (req, res, next) => {
    // res.status(200)
    // next(bounties)
//})

// POST one
bountyRouter.post("/", (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, newSavedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedBounty)
    })
})
//bountyRouter.post("/", (req, res, next) => {
    // const newBounty = res.body
    // newBounty._id = "2"
    // bounties.push(newBounty)
    // res.status(201)
    // next(newBounty)
//})


module.exports = bountyRouter
// Fake DB:
// const bounties = [
//     {
//         name: "Jon Snow",
//         house: "Winterfell",
//         isAlive: "true",
//         _id: "1"
//     }
// ]

// GET All
//bountyRouter.get("/", (req, res, next) => {
    // res.status(200)
    // next(bounties)
//})

// POST one
//bountyRouter.post("/", (req, res, next) => {
    // const newBounty = res.body
    // newBounty._id = "2"
    // bounties.push(newBounty)
    // res.status(201)
    // next(newBounty)
//})