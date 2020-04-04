const crypto = require("crypto");
const cnx = require("../database/cnx");

module.exports = {
  async create(request, response) {
    const { nome, email, whatsap, cidade, uf } = request.body;
    const id = crypto.randomBytes(4).toString("HEX");
    try {
      await cnx("ongs").insert({ id, nome, email, whatsap, cidade, uf });

      return response.json({ id });
    } catch (err) {
      alert("erro de cadastro da ONG");
    }
  },

  async list(request, response) {
    const data = await cnx("ongs").select("*");
    return response.json({ data });
  }
};
