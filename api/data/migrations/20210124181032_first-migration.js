exports.up = async (knex) => {
  await knex.schema
    .createTable("people", (table) => {
      table.increments("person_id");
      table.string("person_name").notNullable();
      table.date("person_birthday").notNullable();
      table.string("person_image").notNullable();
      table
        .integer("person_spouse_id")
        .unsigned()
        .references("person_id")
        .inTable("people")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("nuclear", (table) => {
      table.increments("nuclear_id");
      table.string("nuclear_name").notNullable();
    })
    .createTable("person_nuclear", (table) => {
      table.increments("person_nuclear_id");
      table
        .integer("nuclear_id")
        .unsigned()
        .notNullable()
        .references("nuclear_id")
        .inTable("nuclear")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("person_id")
        .unsigned()
        .notNullable()
        .references("person_id")
        .inTable("people")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("users");
};
