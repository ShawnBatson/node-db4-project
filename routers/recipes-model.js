const db = require("../data/config");

function getRecipes() {
    return db("recipes");
}

function getShoppingList(recipe_id) {
    return db("ingredients as i")
        .leftJoin("recipes_ingredients as ri", "ri.ingredients_id", "i.id")
        .where("ri.recipes_id", recipe_id)
        .select("i.name", "ri.quantity");
}

function getInstructions(recipe_id) {
    return db("steps as s")
        .join("recipes as r", "r.id", "s.recipes_id")
        .where("s.recipes_id", recipe_id)
        .select("r.name", "s.step");
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};
