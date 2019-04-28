const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')


// GET All
bountyRouter.get("/", async (req, res, next) => {
    try {
        const bounties = await Bounty.find()
        return res.status(200).send(bounties)
    }
    catch(err){
        res.status(500)
        return next(err)
    }
})

// POST one
bountyRouter.post("/", (req, res, next) => {
    // create new Object using the Bounty Schema
    const newBounty = new Bounty(req.body)
    // .save() saves a new object to the DB collection
    newBounty.save((err, newSavedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedBounty)
    })
})  

// GET ONE
bountyRouter.get("/:_id", (req, res, next) => {
    Bounty.findOne({_id: req.params._id}, (err, bounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounty)
    })
})

// DELETE ONE - DELETE
bountyRouter.delete("/:_id", (req, res, next) => {
    Bounty.findOneAndRemove({_id: req.params._id}, (err, deletedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(202).send(deletedBounty)
    })
})

// UPDATE ONE - PUT
bountyRouter.put("/:_id", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params._id},   // Find bounty by _id
        req.body,                // Update bounty with this object
        {new: true},             // Send back the new bounty after update
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
    })
})

module.exports = bountyRouter