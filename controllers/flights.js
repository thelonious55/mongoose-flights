const FlightModel = require('../models/flights')

module.exports = {
    new: newFlight,
    create,
    index
}

function newFlight(req, res) {
    res.render('flights/new')
}

async function index(req, res) {
    try {
        const flightDocumentsFromTheDB = await FlightModel.find({})
        res.render('flights/index', {flightDocs: flightDocumentsFromTheDB})
    } catch(err) {
        console.log(err)
        res.redirect('/')
    }
}

async function create(req, res) {
    console.log(req.body)
    try {
        const createdFlightDoc = await FlightModel.create(req.body)
        res.redirect('/flights')
    } catch (err) {
        console.log(err)
        res.redirect('/flights/new')
    }
}