exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.string("id").primary();
    table.string("nome", 50).notNullable();
    table.string("email", 50).notNullable();
    table.decimal("whatsap", 15).notNullable();
    table.string("cidade", 55).notNullable();
    table.string("uf", 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
