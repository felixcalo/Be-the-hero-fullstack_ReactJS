const knex = require("knex");
const configurations = require("../../knexfile.js");

const cnx = knex(configurations.development);

module.exports = cnx;
