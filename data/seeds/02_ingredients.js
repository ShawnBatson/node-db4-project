exports.seed = async function (knex) {
    await knex("ingredients").insert([
        { name: "cup French Fries" },
        { name: "ounce of ketchup" },
        { name: "egg" },
        { name: "ounce of popping corn" },
    ]);
};
