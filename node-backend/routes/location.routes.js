const express = require('express');
const app = express();

const locationRoute = express.Router();
let Location = require('../model/Location');

//Add location
locationRoute.route('/add-location').post((req, res, next) => {
    Location.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
})

//Get all location
locationRoute.route('/').get((req,res) => {
    Location.find((error, data) => {
        if(error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

//Get location
locationRoute.route('/read-location/:id').get((req,res) => {
    Location.findById(req.params.id, (error, data) => {
        if(error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

//Update location
locationRoute.route('/update-location/:id').put((req, res, next) => {
    Location.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if(error) {
            return next(error);
        } else {
            res.json(data);
            console.log('Location Updated Successfully');
        }
    })
})

//Delete location
locationRoute.route('/delete-location/:id').delete((req,res, next) => {
    Location.findByIdAndRemove(req.params.id, (error, data) => {
        if(error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            });
        }
    })
})

module.exports = locationRoute;