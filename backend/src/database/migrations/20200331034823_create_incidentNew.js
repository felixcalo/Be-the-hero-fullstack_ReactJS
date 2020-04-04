exports.up = function(knex) {
  return knex.schema.createTable("incidentNew", function(Table) {
    Table.increments("id").primary();
    Table.string("titulo", 40).notNullable();
    Table.string("descricao", 250).notNullable();
    Table.string("valor").notNullable();

    Table.string("ong_id").notNullable();

    Table.foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidentNew");
};
