module.exports = function(sequelize, DataTypes) {

  let Task = sequelize.define("Task", {
    task_name:     { type: DataTypes.STRING,  allowNull: false }
  , task_duration: { type: DataTypes.INTEGER, allowNull: false }
  , task_type:     { type: DataTypes.STRING,  allowNull: false }
  });

  Task.associate = function(models) {
    // We're saying that a Task should always belong to a Bay
    // A Task can't be created without a Bay due to the foreign key constraint
    Task.belongsTo(models.Bay, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Task;
};
