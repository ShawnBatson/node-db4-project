exports.up = async function (knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id");
        table.text("name").notNullable();
    });
    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id");
        table.text("name").notNullable();
    });
    await knex.schema.createTable("recipes_ingredients", (table) => {
        table.integer("recipes_id").references("id").inTable("recipes");
        table.integer("ingredients_id").references("id").inTable("ingredients");
        table.float("quantity").notNullable();
        table.primary(["recipes_id", "ingredients_id"]);
    });
    await knex.schema.createTable("steps", (table) => {
        table.increments("id");
        table.text("step").notNullable();
        table.integer("recipes_id").references("id").inTable("recipes");
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("recipes_ingredients");
    await knex.schema.dropTableIfExists("steps");
    await knex.schema.dropTableIfExists("recipes");
    await knex.schema.dropTableIfExists("ingredients");
};
