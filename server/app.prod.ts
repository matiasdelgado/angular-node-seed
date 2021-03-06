import * as path from "path";
import * as express from "express";
import routes from "./routes";
import {
  configureBodyParser,
  configureCompression,
  configureCors,
  configureErrorHandler,
  configureRequestLogger
} from "./utils/app.configure";

const DIST_DIR = path.join(__dirname, "../build");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const app = express();

init(app);
app.use(express.static(DIST_DIR));
app.get("*", (req, res) => res.sendFile(HTML_FILE));

function init(expressApp) {
  configureCors(expressApp);
  configureBodyParser(expressApp);
  configureErrorHandler(expressApp);
  configureCompression(expressApp);
  configureRequestLogger(expressApp);

  routes(expressApp);
}

export default app;
