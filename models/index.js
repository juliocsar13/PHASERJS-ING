"use strict"

var config  = require('../config/config_localhost.json')
var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");

var config_heroku = require('../config/config')

if (!global.hasOwnProperty('db')) {

    if (process.env.DATABASE_URL) {
        console.log('PASANDO POR HEROKU');
        var sequelize = new Sequelize(process.env.DATABASE_URL,{
            dialect   : config_heroku.postgres.dialect,
            protocol  : config_heroku.postgres.protocol,
            port      : config_heroku.postgres.port,
            host      : config_heroku.postgres.host,
            logging   : true
        }) 

        global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,

      }

    }else{
        console.log('PASANDO POR APLICACION LOCAL');
        var sequelize = new Sequelize(

                    config.postgres.database,
                    config.postgres.username,
                    config.postgres.password,{

                    dialect:config.postgres.dialect,
                    host:config.postgres.host,
                    define:{
                        freezeTableName:true,
                        timestamps:false,
                        paranoid: true,
                        underscored: true,
                    },
                })
    }

    var db = {};


    fs
      .readdirSync(__dirname)
      .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
      })
      .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
      });


    Object.keys(db).forEach(function(modelName) {
      if ("associate" in db[modelName]) {
        db[modelName].associate(db);
      }
    });

    /*sequelize.sync().then(function() {
      return console.log("::: CONNECTION TO POSTGRES SUPERFUL :::");
  });*/


    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    module.exports = db;

}
