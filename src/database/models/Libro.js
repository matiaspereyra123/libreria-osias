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
        
        publisher_id: {
            type: DataTypes.INTEGER,
          
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
        active: {
            type: DataTypes.INTEGER,
            defaultValue: 1
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
        Libro.hasMany(models.Autor_libro, {
            as: "libro_pivote",
            foreignKey: "book_id" 
        })

        Libro.belongsToMany(models.Autor, {
            as: "autor",
            through: "authors_books",
            foreignKey: "book_id",
            otherKey: "author_id",
            timestamps: false
        })
    
  
        Libro.belongsTo(models.Editorial, {
            as: "editorial",
            foreignKey: "publisher_id"
        })
    }
    


    return Libro
}

