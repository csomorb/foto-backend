module.exports = (sequelize, Sequelize) => {
    const Foto = sequelize.define("foto", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      weight: {
          type: Sequelize.INTEGER
      }
    });
  
    return Foto;
  };