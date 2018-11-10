let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        res.render("index", {burgers: data});
    });
});

router.post("/", function(req, res){
    burger.insertOne(req.body.name, function(){
        res.redirect("/");
    });
});

router.put("/:id", function(req, res){
    burger.updateOne(req.params.id, function(){
        res.redirect("/");
    });
});

router.delete("/:id", function(req, res){
    burger.deleteOne(req.params.id, function(result){
        res.redirect("/");
    });
});

module.exports = router; 
