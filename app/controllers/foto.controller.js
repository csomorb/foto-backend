const db = require("../models");
const Foto = db.foto;
const Op = db.Sequelize.Op;

// Create and Save a new Foto
exports.create = (req, res) => {
  
};

// Retrieve all Fotos from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Foto with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Foto.findByPk(id)
      .then(data => {
        if(data)  
            res.send(data);
        else
        res.status(404).send({
            message: "Photo with id=" + id + " not found"
          });  
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Photo with id=" + id
        });
      });
};

// Update a Foto by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Foto with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Foto.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Foto was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Foto with id=${id}. Maybe Foto was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Foto with id=" + id
        });
      });
};