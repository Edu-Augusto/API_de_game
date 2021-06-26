//Importando as ferramentas a serem usadas
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
//Importando a model do banco de dados
const connection = require('./database/database');
const Game = require('./database/games');
//Informando o express para usar o body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Função de conexão com o banco de dados
connection
    .authenticate()
    .then(() => {
        console.log("Servidor conectado com sucesso com o banco de dados!")
    })
    .catch((erro) => {
        console.log(erro)
    });
//Rota de listagem dos games
app.get('/games', (req,res)=>{
    Game.findAll({ raw: true })
        .then((games) => {
            if (games.length == 0) {
                res.sendStatus(404)
            }
            res.statusCode = 200
            res.json(games)
        })
})
//Rota de listagem única de game
app.get('/game/:id', (req,res)=>{
    let id = req.params.id
    if (isNaN(id)) {
        res.sendStatus(400)
    } else {
        Game.findOne({ raw: true, where: { id } })
            .then((game) => {
                if (game == null) {
                    res.sendStatus(404)
                } else {
                    res.statusCode = 200
                    res.json(game)
                }
            })
    }
});
//Rota de criação de game
app.post('/game', (req,res)=>{
    var {title,year,price}=req.body;
//Verificando se os campos de cadastro estão corretos
    if(title!=undefined){
        if(!isNaN(year)){
            if(!isNaN(price)){
                Game.create({
                    title:title,
                    year:year,
                    price:price
                }).then(() => {
                    res.sendStatus(200);
                });
                }else{
                    res.sendStatus(406);
                }
            }else{
                res.sendStatus(406);
            }
    }else{
        res.sendStatus(406);
    } 
});
//Rota de deleção de game
app.delete('/game/:id', (req,res)=>{
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id=parseInt(req.params.id);
      
        Game.destroy({
            where: {
                id: id
            }
        }).then(() => {
            res.sendStatus(200);
        }).catch(()=>{
            res.sendStatus(404);
        })
    }
})
//Rota de edição de game
app.put('/game/:id', (req,res)=>{
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id=parseInt(req.params.id);
        var {title,year,price}=req.body;
        Game.findOne({ where: { id } })
            .then((game) => {
                //Verificando quais os campos serão atualizados do game
                if (game == null) {
                    res.sendStatus(404)
                } else {
                    if (title != null) {
                        Game.update({ title }, { where: { id } })
                    }
                    if (year != null) {
                        Game.update({year }, { where: { id } })
                    }
                    if (price != null) {
                        Game.update({ price }, { where: { id } })
                    }
                    res.sendStatus(200)
                }
            })
    }
})



app.listen(3000, ()=>{
    console.log('App rodando!');
})
