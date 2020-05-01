const express = require("express");
const recipesModel = require("./recipes-model");
const db = require("../data/config");

const router = express.Router({
    mergeParams: true,
});

router.get("/", async (req, res, next) => {
    try {
        res.json(await db("recipes"));
    } catch (err) {
        next(err);
    }
});

module.exports = router;
