const { authJwt } = require("../middlewares");
const controller = require("../controllers/album.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get(
        "/api/albums", 
        [authJwt.verifyToken],
        controller.findAll);
  
    app.get(
      "/api/albums/:id",
      [authJwt.verifyToken],
      controller.findOne
    );

    app.post(
        "/api/albums", 
        [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
        controller.create);

    app.put(
        "/api/albums/:id",
        [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
        controller.update
    );

    app.delete(
        "/api/albums/:id",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.delete
    );


  };