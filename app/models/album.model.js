module.exports = (sequelize, DataTypes) => {
    const Album = sequelize.define("album", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      idCover: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      idParent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    });
    
    return Album;
  };