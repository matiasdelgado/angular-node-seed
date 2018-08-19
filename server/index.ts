import * as http from "http";
import app from "./app.prod";
import appConfig from "./config";
import logger from "./utils/logger";

app.set("x-powered-by", false);

http.createServer(app).listen(appConfig.port);

logger.info(`http://localhost:${appConfig.port}`);
