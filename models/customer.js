module.exports = function(sequelize, DataTypes) {

  // custInfo {
  //   firstname: (string),
  //   lastname: (string),
  //   address: (string),
  //   customerid: (string numeric phone number)


    let Customer = sequelize.define("Customer", {
        firstname:   { type: DataTypes.STRING,  allowNull: false } 
      , lasttname:   { type: DataTypes.STRING,  allowNull: false } 
      , address:     { type: DataTypes.STRING,  allowNull: false } 
      , phonenumber: { type: DataTypes.STRING,  allowNull: false } 

    });
  
    // ---------------------------------------------------------------------------
    // We're saying that a Car should always belong to a Customer
    // A Car can't be created without a Customer due to the foreign key constraint
    // ---------------------------------------------------------------------------

    Customer.associate = function(models) {
      Customer.hasMany(models.Vehicle, { onDelete: "cascade" }) ,
      Customer.hasMany(models.Task, { onDelete: "cascade" })
    };
    
    return Customer;
  };