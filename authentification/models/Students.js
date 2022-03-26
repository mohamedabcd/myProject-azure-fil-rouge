module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("Students", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,


        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,


        },
        grade: {
            type: DataTypes.STRING,
            allowNull: false,


        },


    })

    Students.associate = (models) => {
        Students.hasMany(models.Comments, {
            onDelete: "cascade",
        });
    }

    return Students
}

