exports.seed = async function (knex) {
    await knex("recipes").insert([
        { name: "Microwave French Fries" },
        { name: "Popcorn" },
    ]);
};
