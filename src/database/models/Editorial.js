module.exports = (sequelize, DataTypes) => {

    const Editorial = sequelize.define("Editorial", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremenct: true,
            allowNull: false
        }, 
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(500)
        },
        email: {
            type: DataTypes.STRING(45)
        },
        phone_number: {
            type: DataTypes.INTEGER
        },
    }, 
    {
        tableName: "publishers",
        timestamps: false,   
        });


    
    Editorial.associate = function (models) {
        Editorial.hasMany(models.Libro, {
            as: "libros",
            foreignKey: "publisher_id"
        })
    }   



    return Editorial
}
