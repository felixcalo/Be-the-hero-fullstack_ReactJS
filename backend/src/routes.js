const express = require("express");
const routes = express.Router();
const OngsController = require("./controllers/OngsControllers");
const IncidentController = require("./controllers/IncidentController");
const profilController = require("./controllers/profilController");
const session = require("./controllers/sessionController");

routes.get("/ong", OngsController.list);
routes.post("/ong", OngsController.create);

routes.post("/ong/newIncident", IncidentController.create);
routes.get("/ong/newIncident", IncidentController.list);
routes.delete("/ong/newIncident/:id", IncidentController.delete);

routes.get("/ong/profil", profilController.listEspecific);

routes.post("/session", session.create);

module.exports = routes;
