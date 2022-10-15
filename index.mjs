
import axios from 'axios'
import { io } from "socket.io-client";

module.exports.sendNotify=async(obj)=>{
    let {userId, grp, message, userType} = obj
    if(typeof(userId)==='string' && userId) userId = [userId]
    if(typeof(grp)==='string' && grp) grp = [grp]
    if(typeof(userType)==='string' && userType) userType = [userType]
    await axios.post('http://127.0.0.1:5001/notify', { userId, grp, message, userType })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

module.exports.connect=(userId)=>{
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