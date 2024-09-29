const express = require("express");
const app = express();
const http =require("http");
const {Server} =require('socket.io');
const expressServer = http.createServer(app);
//create socket server Start
const io = new Server(expressServer)

//Create socket connection start
io.on('connection', (socket)=>{
  console.log("User is connect");
  socket.on('disconnect', ()=>{
    console.log("user is disconnect")
  })
})
//client data recived
io.on('connection', (socket)=>{
  socket.on('clientData',(data)=>{
  // socket.emit other person fetch to fetch not data..
  //emidiyet data transfer
    io.emit('serverData',data);
  });
  
})
app.get('/', (req,res)=>{
  res.sendFile(__dirname+"/index.html");
})
expressServer.listen(3000,()=>{
  console.log("http://localhost:3000");
})