"use strict"
module.exports = function(sequelize, DataType) {

    var User = sequelize.define("User", {

        email:{

            type:DataType.STRING,
            primaryKey:true,
            unique:true
        },
        nick_name:{
                type:DataType.STRING
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
        sexo        : DataType.STRING,
        password    : DataType.STRING,
        name        : DataType.STRING,
        lastname    : DataType.STRING,
        phone       : DataType.INTEGER,
        role        : {

                        type:DataType.STRING,
                        defaultValue:'costumer'
        },
        born        : DataType.STRING

    })

    return User;
}
