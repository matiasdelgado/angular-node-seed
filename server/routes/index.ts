import appConfig from "../config";
import testRoute from "./test.route";

export default function(app) {
  app.use("/api/ping", (req, res) => res.send("PONG"));
  app.use("/api/test", testRoute);

  // Protected routes
}
