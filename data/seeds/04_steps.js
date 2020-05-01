exports.seed = async function (knex) {
    await knex("steps").insert([
        {
            step: "Put the box of fries into the microwave for 2 minutes",
            recipes_id: 1,
        },
        { step: "Remove the box when the timer dings!", recipes_id: 1 },

        { step: "Add ketchup if you so desire", recipes_id: 1 },

        {
            step: "Place the popping corn in the desired popcorn machine",
            recipes_id: 2,
        },

        {
            step:
                "make sure the corn is moving so it does not burn, and cook it until there is 1-2 seconds between pops",
            recipes_id: 2,
        },
    ]);
};
