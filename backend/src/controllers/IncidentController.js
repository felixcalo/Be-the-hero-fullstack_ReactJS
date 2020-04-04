const cnx = require("../database/cnx");

module.exports = {
  async create(request, response) {
    const { titulo, descricao, valor } = request.body;
    const ong_id = request.headers.authorization;
    const [id] = await cnx("incidentNew").insert({
      titulo,
      descricao,
      valor,
      ong_id
    });
    return response.json({ id });
  },

  async list(request, response) {
    const { page = 1 } = request.query;

    const data = await cnx("incidentNew")
      .join("ongs", "ongs.id", "=", "incidentNew.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidentNew.*",
        "ongs.nome",
        "ongs.email",
        "ongs.whatsap",
        "ongs.cidade",
        "ongs.uf"
      ]);

    const [count] = await cnx("incidentNew")
      .select("*")
      .count();
    response.header("X-Path-count", count["count(*)"]);

    return response.json({ data });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ongs_id = request.headers.authorisation;

    const incident = await cnx("incidentNew")
      .where("id", id)
      .select("ong_id")
      .first();
    if (incident.ong_id != ongs_id) {
      return response.status(401).json({ erro: "Operation not permitted" });
    }
    await cnx("incidentNew")
      .where("id", id)
      .delete();

    return response.status(204).send();
  }
};
