import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {actualTimeInFormat} from "../utils/Utils";

//this class contains all necessary method to run a webSocket
//to achieve the purpose which is send and receive msg in the same room
export function connect(setStompC) {
    let socket = new SockJS('http://localhost:8080/gs-guide-websocket');
    socket.withCredentials = true;
    let stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        setStompC(stompClient);

    });
}

export function disconnect(stompC){
    stompC.disconnect();

}

export function sendMessage(stompC, msg, username) {
    stompC.send("/app/sendMsg", {}, JSON.stringify({'content': msg, 'user': username}))

}

export function getMessage(stompC, setMsg, msgCopy) {
    let actualTime = actualTimeInFormat();

    stompC.subscribe('/topic/greeting', function (greeting) {

        msgCopy.push({
                time: actualTime,
                content: JSON.parse(greeting.body).content,
                user: JSON.parse(greeting.body).user
            });
        setMsg(msgCopy);

    });
}