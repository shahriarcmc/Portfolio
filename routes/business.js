var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

// Connect to our model
let Business = require('../models/business');

/* GET users listing. */
router.get('/', function(req, res, next) {  
    Business.find((err, businessList) => {
        console.log(businessList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('business', {title: 'Business Contact List', BusinessList: businessList})            
        }
    })

});

module.exports = router;