const uuidv4 = require('uuid/v4')
let bounties = [
    {
        "firstName": "Darth",
        "lastName": "Vader",
        "living": true,
        "bountyAmount": 100,
        "type": "Sith",
        "_id": uuidv4()
    },
    {
        "firstName": "Darth",
        "lastName": "Bane",
        "living": true,
        "bountyAmount": 120,
        "type": "Sith",
        "_id": uuidv4()
    },
    {
        "firstName": "Ulic",
        "lastName": "Qel-Droma",
        "living": true,
        "bountyAmount": 180,
        "type": "Sith",
        "_id": uuidv4()
    },
    {
        "firstName": "Freedon",
        "lastName": "Nadd",
        "living": true,
        "bountyAmount": 150,
        "type": "Sith",
        "_id": uuidv4()
    },
    {
        "firstName": "Naga",
        "lastName": "Sadow",
        "living": true,
        "bountyAmount": 170,
        "type": "Sith",
        "_id": uuidv4()
    },
    {
        "firstName": "Marka",
        "lastName": "Marka Ragnos",
        "living": true,
        "bountyAmount": 210,
        "type": "Sith",
        "_id": uuidv4()
    },
    {
        "firstName": "Darth",
        "lastName": "Vitiate",
        "living": true,
        "bountyAmount": 200,
        "type": "Sith",
        "_id": uuidv4()
    },
    {
        "firstName": "Exar",
        "lastName": "Kun",
        "living": true,
        "bountyAmount": 300,
        "type": "Sith",
        "_id": uuidv4()
    }
]

module.exports = {bounties}