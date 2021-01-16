module.exports = (sequelize, DataTypes) => {
  const Medicine = sequelize.define(
    "medicine_list",
    {
      list_id: { type: DataTypes.INTEGER, unqiue: true, allowNull: false },
      medicine_name: DataTypes.STRING,
      intake_interval: DataTypes.INTEGER,
      dosage: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE
    },
    { sequelize }
  );

  Medicine.associate = function(models) {
    // associations can be defined here
  };

  Medicine.find_today = async function() {
    const results = await this.findAll();

    return results;
  };

  return Medicine;
};
