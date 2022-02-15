exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.text("username", 128).notNullable().unique();
      users.text("password", 128).notNullable()
      users.text("email", 128).notNullable();
    })
    .createTable("nuclear", (table) => {
      table.increments("nuclear_id");
      table.text("nuclear_name").notNullable().unique();
    })
    .createTable("people", (table) => {
      table.increments("person_id");
      table.text("person_name").notNullable();
      table.date("person_birthday").notNullable();
      table.text("person_image");
      table.integer("person_spouse_id");
      table
        .integer("nuclear_id")
        .unsigned()
        .notNullable()
        .references("nuclear_id")
        .inTable("nuclear")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("people")
    .dropTableIfExists("nuclear")
    .dropTableIfExists("users");
};
