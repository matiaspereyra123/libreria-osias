module.exports = (sequelize, DataTypes) => {

    const Autor = sequelize.define("Autor", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremenct: true,
           
        }, 
        first_name: {
            type: DataTypes.STRING(45)
        },
        last_name: {
            type: DataTypes.STRING(45)
        },
    }, 
    {
        tableName: "authors",
        timestamps: false,   
        });


        //acá agregar las relaciones 
        Autor.associate = function(models) {
            Autor.hasMany(models.Libro , {
                as: "libros",
                foreignKey: "author_id"
            })
        }

        



    return Autor
}
