module.exports = function(sequelize, DataTypes) {

// Changed on 21JUL2019 by Robin HC to associate Vehicle to Task 

  // vehicleInfo {
  //   id: (string unique),
  //   color : (string),
  //   year : (string),
  //   make : (string),
  //   model : (string),
  //   engine : (string),
  //   transmission: (string)

    let Vehicle = sequelize.define("Vehicle", {
      vehicle_vin:          { type: DataTypes.STRING,  allowNull: false } ,  
      vehicle_color:        { type: DataTypes.STRING,  allowNull: false } ,
      vehicle_year:         { type: DataTypes.INTEGER, allowNull: false } ,
      vehicle_make:         { type: DataTypes.STRING,  allowNull: false } ,
      vehicle_model:        { type: DataTypes.STRING,  allowNull: false } ,
      vehicle_engine:       { type: DataTypes.STRING,  allowNull: true }  ,
      vehicle_transmission: { type: DataTypes.STRING,  allowNull: true }
    });
  
    // We're saying that a Vehicle should always belong to a Customer
    // A Vehicle can't be created without a Customer due to the foreign key constraint

    Vehicle.associate = function(models) {
      Vehicle.belongsTo(models.Customer, { foreignKey: { allowNull: false } }), 
      Vehicle.hasMany(models.Task, { onDelete: "cascade" })
    };
    
    return Vehicle;
  };
  