const express = require('express')
const path = require("path");

const server = express();

server.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,'/bloco.js\n'))
    
})
server.get("/dados1", (req, res)=>{
   res.sendFile(path.join(__dirname,"dados_1.js"))
})
server.get('/sentenca',(req,res)=>{
    res.sendFile(path.join(__dirname,"desafio_sentenca_bloco.js"))
})

server.listen(80,()=>console.log("Servidor rodando na porta 80"));