const cnx = require("../database/cnx");

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ong = await cnx("ongs")
      .where("id", id)
      .select("nome")
      .first();

    if (!ong) {
      return response.status(401).json({ error: "No ONG found with this ID" });
    }
    return response.json(ong);
  }
};
