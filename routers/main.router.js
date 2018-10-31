const express = require('express');
const Example = require('../models/example.model');
const ExampleController = require('../controllers/example.controller');

module.exports = app => {
    const exampleRoutes = express.Router();

    exampleRoutes.route('/')
    //GET request to /api/
    .get((req, res) => {
        Example.find({}, (err, examples) => {
            res.json(examples)
        })
    })
    //POST request to /api/
    .post((req, res) => {
        let example = new Example(req.body);
        example.save();
        res.status(201).send(example)
    })

    //GET request to /api/:id
    exampleRoutes.get('/:id', ExampleController.getExample);

    app.use('/api', exampleRoutes);
}