import * as express from "express";
import * as http from "http";
import logger from "./utils/logger";

import appConfig from "./config";
import routes from "./routes";
import {
  configureBodyParser,
  configureCompression,
  configureCors,
  configureDevErrorHandler,
  configureRequestLogger
} from "./utils/app.configure";

const app = express();
init(app);

function init(expressApp) {
  configureCors(expressApp);
  configureBodyParser(expressApp);
  configureDevErrorHandler(expressApp);
  configureCompression(expressApp);
  configureRequestLogger(expressApp);

  routes(expressApp);
}

http.createServer(app).listen(appConfig.port, () => {
  logger.info("Server listening at http://localhost:%s", appConfig.port);
});

export default app;
