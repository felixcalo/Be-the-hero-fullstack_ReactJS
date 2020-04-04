const cnx = require("../database/cnx");

module.exports = {
  async listEspecific(request, response) {
    const ong_id = request.headers.authorization;

    const data = await cnx("incidentNew")
      .where("ong_id", ong_id)
      .select("*");

    return response.json(data);
  }
};
