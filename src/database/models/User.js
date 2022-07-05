module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define("Usuario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremenct: true,
           
        },
        orderCart_id: {
            type: DataTypes.INTEGER,
            
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
            type: DataTypes.STRING(200),
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
            allowNull: false,
            defaultValue: 0,

        }
        // create_time: {
        //     type: DataTypes.DATE,
        // },
        // update_time: {
        //     type: DataTypes.DATE,
        // } 
    
    }, 
    {
        tableName: "users",
        timestamps: false,
        // underscored: true
    });


    return Usuario
}

