module.exports = (sequelize, DataTypes) => {
  const Foto = sequelize.define("foto", {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.INTEGER
    },
    height: {
      type: DataTypes.INTEGER
    },
    width: {
      type: DataTypes.INTEGER
    },
    shootDate: {
      type: DataTypes.DATE
    },
    coord: {
      type: DataTypes.GEOMETRY
    },
    srcOrig: {
      type: DataTypes.STRING
    },
    src150x150: {
      type: DataTypes.STRING
    },
    src320x240: {
      type: DataTypes.STRING
    },
    src640x480: {
      type: DataTypes.STRING
    },
    src1280x720: {
      type: DataTypes.STRING
    },
    src1920x1080: {
      type: DataTypes.STRING
    }
  });
  
  return Foto;
};