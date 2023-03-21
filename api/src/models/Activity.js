const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activity", {
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    dificulty:{
        type: DataTypes.ENUM('1', '2', '3', '4', '5'),
        allowNull: false,
    },
    duration:{
        type: DataTypes.STRING,
    },
    season:{
        type: DataTypes.ENUM('summer', 'winter', 'fall', 'spring'),
        allowNull: false,
    }
  },
  {
    timestamps: false,
  });
};
