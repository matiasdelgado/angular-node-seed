import * as express from "express";
import * as http from "http";

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

function init(app) {
	configureCors(app);
	configureBodyParser(app);
	configureDevErrorHandler(app);
	configureCompression(app);
  configureRequestLogger(app);

	routes(app);
}

http.createServer(app).listen(appConfig.port, () => {
	console.info('Server listening at http://localhost:%s', appConfig.port);
});

export default app;
