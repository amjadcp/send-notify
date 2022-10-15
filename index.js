import connect from "./connect";
import sendNotify from "./sendNotify";

class SendNotify{
    conn(userId){
        connect(userId)
    }
    send(obj){
        sendNotify(obj)
    }
}

export default SendNotify