"use strict"

module.exports = function(sequelize,DataType){

    var Contact = sequelize.define("Contact",{
        name:DataType.STRING,
        email:DataType.STRING,
        subject:DataType.STRING,
        message:DataType.STRING
    })
    return Contact;
}
