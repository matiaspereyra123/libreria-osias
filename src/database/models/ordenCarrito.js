module.exports = (sequelize, DataTypes) => {

    const ordenCarrito = sequelize.define("ordenCarrito", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremenct: true,
            allowNull: false
        }, 
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        confirmed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        create_time: {
            type: DataTypes.DATE,
        },
        update_time: {
            type: DataTypes.DATE,
        } 
    }, 
    {
        tableName: "orderscarts",
        timestamps: true,
        underscored: true
        });


        //acá agregar las relaciones las relaciones



    return ordenCarrito
}
