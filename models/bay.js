
module.exports = function(sequelize, DataTypes) 
{
  var Bay = sequelize.define("Bay", {
    baynumber: DataTypes.INTEGER
  });

  Bay.associate = function(models) 
  {
    // Associating Bay with Tasks
    // When an Bay is deleted, also delete any associated Tasks
    Bay.hasMany(models.Task, {
      onDelete: "cascade"
    });
  };

  return Bay;
};
