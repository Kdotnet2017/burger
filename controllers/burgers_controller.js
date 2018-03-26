var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var handlebarsObject = { burgers: data };
        res.render("index", handlebarsObject);
    });
});
router.post("/api/burgers", function (req, res) {
    burger.insertOne("burgers_name", req.body.name, function (data) {
        res.json({ id: data.insertId });
    })
});
router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;
    burger.updateOne("devoured", req.body.devoured, id, function (data) {
    })
});
module.exports = router;