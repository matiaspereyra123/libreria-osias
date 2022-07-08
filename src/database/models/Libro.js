module.exports = (sequelize, DataTypes) => {

    const Libro = sequelize.define("Libro", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremenct: true
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Autor",
                key: "id"
            }
        },
        second_author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Autor",
                key: "id"
            }
        },
        publisher_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT("long"),
        },
        publication_date: {
            type: DataTypes.INTEGER
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isbn: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true
        },
        pages: {
            type: DataTypes.INTEGER,
        },
        stock: {
            type: DataTypes.INTEGER,

        },
        image: {
            type: DataTypes.TEXT("long")
        },
        translator: {
            type: DataTypes.STRING(100)
        },
        illustrator: {
            type: DataTypes.STRING(100)
        },
        language: {
            type: DataTypes.STRING(45)
        },
        create_time: {
            type: DataTypes.DATE,
        },
        update_time: {
            type: DataTypes.DATE,
        }
    
    }, 
    {
        tableName: "books",
        timestamps: false,
  
    });



    Libro.associate = function(models) {
        Libro.belongsTo(models.Genero, {
            as: "genero",
            foreignKey: "genre_id"
        })
        Libro.belongsTo(models.Autor, {
            as: "autor",
            foreignKey: "author_id" 
        })
        //prueba segundo autor
        Libro.belongsTo(models.Autor, {
            as: "segundoAutor",
            foreignKey: "second_author_id" 
        })
        Libro.belongsTo(models.Editorial, {
            as: "editorial",
            foreignKey: "publisher_id"
        })
    }
    


    return Libro
}

