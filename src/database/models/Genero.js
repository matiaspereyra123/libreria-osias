module.exports = (sequelize, DataTypes) => {

    const Genero = sequelize.define("Genero", {
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
    }, 
    {
        tableName: "genres",
        timestamps: false,
        
        });


        //revisar las relaciones

        Genero.associate = function(models) {
            Genero.hasMany(models.Libro , {
                as: "libros",
                foreignKey: "genre_id"
            })
        }

    return Genero
}

