module.exports = function(sequelize, DataTypes) {

// Changed on 20JUL2019 by Robin HC to remove task_type from Task model
// Changed on 21JUL2019 by Robin HC to associate Task to Vehicle and Customer

//   taskInfo {
//     duration: (int hrs),
//     name: (string),
//     id: (string unique),
//     custInfo : (custInfo structure),
//     vehicleInfo : (vehicleInfo structure)
//  };

  let Task = sequelize.define("Task", {
    task_name:     { type: DataTypes.STRING,  allowNull: false }
  , task_duration: { type: DataTypes.INTEGER, allowNull: false }
  });

  
  // A Task can't be created without a Bay due to the foreign key constraint     
  // A Task can't be created without a Customer due to the foreign key constraint
  // A Task can't be created without a Vehicle due to the foreign key constraint  

  Task.associate = function(models) { 
    Task.belongsTo(models.Bay,      { foreignKey: { allowNull: false } }),
    Task.belongsTo(models.Customer, { foreignKey: { allowNull: false } }),
    Task.belongsTo(models.Vehicle,  { foreignKey: { allowNull: true  } });
  };

  return Task;
};
