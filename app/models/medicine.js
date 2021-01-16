const { Op } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Medicine = sequelize.define(
    "MedicineList",
    {
      medicineName: { type:DataTypes.STRING, field: 'medicine_name' },
      intakeInterval: { type:DataTypes.INTEGER, field: 'intake_interval' },
      dosage: { type:DataTypes.STRING, field: 'dosage' },
      startDate: { type:DataTypes.DATE, field: 'start_date' },
      endDate: { type:DataTypes.DATE, field: 'end_date' }
    },
    {
        tableName: 'medicine_list',
        underscored: true,
        timestamps: false,
        freezeTableName: true
    }
  );

  Medicine.removeAttribute('id');

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
