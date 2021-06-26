//Model de criação de row na tabela
const Sequelize=require("sequelize");
const connection=require("./database");

const Game=connection.define("game",{
    title:{
        type:Sequelize.STRING,
        allowNull: false
    },
    year:{
        type:Sequelize.INTEGER
    },
    price:{
        type:Sequelize.INTEGER
    }
});
Game.sync({force:false});
module.exports= Game;