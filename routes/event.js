var express = require('express');
var router = express.Router();
var events = require('../model/events')
//new rest(oExpressRouter, oAuthMiddleWare, oApiConfig);

router.get('/', (req, res)=>{

    events.find(function(err, item){
            if(err) throw err;
            res.render("show.twig", {item});
    });
});

router.post('/search', (req, res)=>{

events.find({city : req.body.Csearch, nbplace : req.body.NBsearch}, 
    function(err, item){
if(err) throw err;

res.render("show.twig", {item});

});


});

module.exports = router;
