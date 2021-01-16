const { Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Medicine = sequelize.define(
    "medicine_list",
    {
      list_id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
      medicine_name: DataTypes.STRING,
      intake_interval: DataTypes.INTEGER,
      dosage: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE
    },
    {
        timestamps: false,
        freezeTableName: true
    }
  );

  Medicine.associate = function(models) {
    // associations can be defined here
  };

  Medicine.find_today = async function() {
    const dt = new Date();
    // change to GMT +7
    dt.setHours( dt.getHours() + 7 )

    const results = await this.findAll({
        where: {
                start_date: {
                  [Op.lt]: dt
                },
                end_date: {
                    [Op.gt]: dt
                  },
        }
    });

    return results;
  };

  return Medicine;
};
