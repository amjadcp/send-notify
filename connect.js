import { io } from "socket.io-client";

const connect=(userId)=>{
    const socket = io('http://127.0.0.1:5000', { query: `userId=${userId}` })
    socket.on("connect", ()=>{
        console.log(socket.id);
        localStorage.setItem('socketId', socket.id)
    })
    socket.on("notify", (message)=>{
        console.log('------------->', message);
        localStorage.setItem('message', message)
    
    })
}

export default connect