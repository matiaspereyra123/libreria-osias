module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define("Usuario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremenct: true,
            allowNull: false
        },
        orderCart_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
       email: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        dni: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        },
       address: {
            type: DataTypes.STRING(100)
        },
        birth_date: {
            type: DataTypes.DATE,
         
        },
        image: {
            type: DataTypes.STRING(100),
        },
        isAdmin: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: DataTypes.INTEGER,
        },
        create_time: {
            type: DataTypes.DATE,
        },
        update_time: {
            type: DataTypes.DATE,
        } 
    
    }, 
    {
        tableName: "users",
        timestamps: false,
        // underscored: true
    });



    // Pelicula.associate = function(models) {
    //     Pelicula.belongsTo(models.Genero, {
    //         as: "genero",
    //         foreignKey: "genre_id"
    //     })
    // Pelicula.belongsToMany(models.Actor, {
    //         as: "actores",
    //         through: "actor_movie",
    //         foreignKey: "movie_id",
    //         otherKey: "actor_id",
    //         timestamps: true
    //     })
    // }
    

    



    return Usuario
}

