"use strict"
module.exports = function(sequelize, DataType) {

    var User = sequelize.define("User", {

        email:{

            type:DataType.STRING,
            primaryKey:true,
            unique:true
        },
        nick_name:{
                type:DataType.STRING,
                unique:true
        },
        level:{
                type:DataType.INTEGER,
                defaultValue: '1'
        },
        flat: {
                type:DataType.BOOLEAN,
                defaultValue: true
        },
        create_at: {
            type: DataType.DATE,
            defaultValue: DataType.NOW
        },
        id          : DataType.INTEGER,
        sexo        : DataType.STRING,
        password    : DataType.STRING,
        name        : DataType.STRING,
        lastname    : DataType.STRING,
        phone       : DataType.INTEGER,
        role         : DataType.STRING

    })

    return User;
}
