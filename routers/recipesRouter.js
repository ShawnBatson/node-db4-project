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

router.get("/:id/shoppingList", async (req, res, next) => {
    const { id } = req.params;
    recipesModel.getShoppingList(id).then((list) => {
        res.json(list);
    });
});

router.get("/:id/instructions", async (req, res, next) => {
    const { id } = req.params;
    recipesModel.getInstructions(id).then((instruction) => {
        res.json(instruction);
    });
});

module.exports = router;
