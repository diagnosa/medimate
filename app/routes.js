const controllers = require("./controllers");
const config = require("../config");

module.exports.registerRoutes = app => {
  app.use("/", controllers.home);
  app.use("/insert-prescription", controllers.prescription);
  app.use("/auth", controllers.auth);
  app.use("/tutorial", controllers.tutorial);
  app.use("/medicine", controllers.medicine);
};

module.exports.registerErrorHandlers = app => {
  app.use(function(err, req, res, next) {
    console.error(err.message);
    res.status(err.status || 500);
    res.render("500", {
      message: err.message,
      error: config.env === "development" ? err : {}
    });
  });
};
