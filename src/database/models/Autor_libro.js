module.exports = (sequelize, DataTypes) => {

    const Autor_libro = sequelize.define("Autor_libro", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremenct: true,
           
        }, 
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, 
    {
        tableName: "authors_books",
        timestamps: false,   
        });


        Autor_libro.associate = function(models) {
            Autor_libro.belongsTo(models.Libro, {
                as: "pivote_libro",
                foreignKey: "book_id",
                timestamps: false
            }),
            Autor_libro.belongsTo(models.Autor, {
                as: "pivote_autor",
                foreignKey: "author_id"
            })

    

        }

        



    return Autor_libro
}
