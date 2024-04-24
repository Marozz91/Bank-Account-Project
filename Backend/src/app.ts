import express from "express"
import appConfig from "./4-utils/app-config";
import dataRoutes from "./6-routes/data-routes"
import dal from "./4-utils/dal";
import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import cors from "cors";

// Create server object:
const server = express();

server.use(cors());

// Create request body object if json was sent:
server.use(express.json());

// Route requests:
server.use("/api/accounts", dataRoutes);
server.use(routeNotFound);
server.use(catchAll);

// Run server:
server.listen(appConfig.port, async () => {
    await dal.connect();
    console.log("Listening on http://localhost:" + appConfig.port)
});