const express = require("express");
const router = express.Router();


router.get('/', function(req,res){
    res.render("Home")
})

router.get('*', function(req,res){
    res.render('CannotGet')
})

module.exports = router;