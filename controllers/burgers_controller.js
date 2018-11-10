let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");


router.get("/", function (req, res) {
    burger.all(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});


router.post("/api/burgers", function (req, res) {
    burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {
        console.log(result)
        res.json({ id: result.insertId });
    });
});


router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;


    burger.update(
        { 
            devoured: req.body.devoured 
        }, 
        condition, 
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } 
            res.status(200).end();
        }
    );
});

module.exports = router; 
