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
            Autor.belongsToMany(models.Libro, {
                as: "libros",
                through: "authors_books",
                foreignKey: "book_id",
                otherKey: "author_id",
                timestamps: false
            })
            Autor.hasMany(models.Autor_libro, {
                as: "autor_pivote",
                foreignKey: "author_id"
            })
      
        

        }

        



    return Autor
}
