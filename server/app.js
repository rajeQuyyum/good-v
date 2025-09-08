const express = require('express')
const http = require('http')
const { Socket } = require('socket.io-client')
const Server = require('socket.io').Server


const app = express()

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*"
    }



})

io.on("connection", (Socket) =>{
    console.log("connected");

    Socket.on("chat", chat => {
        io.emit("chat", chat)
    })

    
    Socket.on("disconnect", () => {
        console.log("disconnect")
    })

})
 server.listen("3001", () =>{
    console.log("running on 3001 port")
 })