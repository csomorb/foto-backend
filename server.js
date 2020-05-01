const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//TODO: à décomenter pour la prod
//const helmet = require('helmet');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

//TODO: à décomenter pour la prod
//app.use(helmet()); 

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
const Album = db.album;
// db.sequelize.sync(); //Todo A decocher pour la prod!
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    initial();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to csomorb foto application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/album.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Create diffrent roles
function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });

    Album.create({
      id: 1,
      title: "Album 1",
      description: "Description album 1",
      idParent: 0
    });
    Album.create({
      id: 2,
      title: "Album 2",
      description: "Description album 2",
      idParent: 0
    });
    Album.create({
      id: 3,
      title: "Sous Album 1",
      description: "Description sous album",
      idParent: 1
    });

  }