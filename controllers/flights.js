const FlightModel = require('../models/flights')

module.exports = {
    new: newFlight,
    create
}

function newFlight(req, res) {
    res.render('flights/new')
}

async function create(req, res) {
    console.log(req.body)
    try {
        const createdFlightDoc = await FlightModel.create(req.body)
        res.redirect('/flights/new')
    } catch (err) {
        console.log(err)
        res.redirect('/flights/new')
    }
}