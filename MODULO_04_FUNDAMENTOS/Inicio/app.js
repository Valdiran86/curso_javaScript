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
server.get("/array",(req,res)=>{
    res.sendFile(path.join(__dirname,'/tiposArray.js'))
})
server.get("/objetos",(req,res)=>{
    res.sendFile(path.join(__dirname,"/tiposObject.js"))
})
server.get("/null", (req, res)=>{
    res.sendFile(path.join(__dirname,'/nullUndfined.js'))
})
server.get("/função1",(req,res)=>{
    res.sendeFile(path.join(__dirname,"/funcao1.js"))
})

server.listen(80,()=>console.log("Servidor rodando na porta 80"));