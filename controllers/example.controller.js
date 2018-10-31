"use strict"
const Example = require('../models/example.model');


exports.getExample = (req, res) => {
    var id = req.params.id;

    Example.find( {_id: id}, (err, examples) => {
        if(err){
            return res.status(422).json({
                msg: 'Error retrieving example',
                error: err
            });
        }
        else{
            return res.send(examples);
        }
    })
}