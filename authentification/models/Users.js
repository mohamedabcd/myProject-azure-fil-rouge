module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,


        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,


        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,


        },

    })

    Users.associate = (models) => {
        Users.hasMany(models.Comments, {
            onDelete: "cascade",
        });
    }

    return Users;
}

