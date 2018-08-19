import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as path from "path";
import logger from "./logger";

function configureRequestLogger(app) {
  app.use((req, res, next) => {
    logger.info({
      label: "Request",
      message: `${req.method} ${req.originalUrl}`
    });
    next();
  });
}

function configureCors(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization");
    res.header("Access-Control-Max-Age", "600");
    res.header("Referrer-Policy", "no-referrer");
    res.header("X-Content-Type-Options", "nosniff");
    res.header("X-Frame-Options", "DENY");

    next();
  });
}

function configureBodyParser(app) {
  app.use(bodyParser.text());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
}

function configureErrorHandler(app) {
  app.use(function(err, req, res, next) {
    logger.error(err.stack);
    const status = (err && err.status) || 500;
    res.status(status).send(err.message);
    return next();
  });
}

function configureDevErrorHandler(app) {
  app.use(function(err, req, res, next) {
    const message = `${err.message || ""}\nError Stack: ${err.stack}`;
    logger.error("Something went wrong: ", err.stack);
    const status = (err && err.status) || 500;
    res.status(status).send(message);
    next();
  });
}

function configureCompression(app) {
  const options = {
    filter: (req, res) => {
      if (req.url.endsWith(".mp4")) {
        return false;
      }
      return compression.filter(req, res);
    }
  };
  app.use(compression(options));
}

export {
  configureBodyParser,
  configureCompression,
  configureCors,
  configureDevErrorHandler,
  configureErrorHandler,
  configureRequestLogger
};

