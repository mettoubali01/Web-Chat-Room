import './chat.css'
import FormChat from "./FormChat";
import Message from "./Message";
import {useContext, useState, useEffect} from 'react';
import {UserContext} from "../../context-api/UserContext";
import {toastAdviser} from "../../utils/ToastAdviser";
import {getMessage} from "../../Websocket/WebSocket";

const Chat = _ => {

    const [msg, setMsg] = useState([]);
    const {user, logged, stomp} = useContext(UserContext);
    const [username, setUsername] = user;
    const [isAuthenticated] = logged;
    //to check if we the stomp js connected to send or receive the messages
    const [stompC, setStompC] = stomp;
    const messageInfo = "You have to login to join the chat room"
    const messageType = 'warning';

    useEffect(() => {

        let msgCopy = msg.slice()

        //Get the message the last message and add it to
        stompC && getMessage(stompC, setMsg, msgCopy);

    }, [msg])


    useEffect(() => {

        if (!isAuthenticated)
            toastAdviser(messageInfo, messageType);

        stompC && fetch('http://localhost:8080/topic/greetings')
            .then(response => response.json())
            .then(result => setMsg(result));

    }, []);

    return (

        <div className="chat-section">
            <div className="sub-container">
                <p className="room-title">Start Chatting</p>
                <div className="conversation">
                    {msg.map((text, index) => {
                        return (<Message key={index}
                                         isMyMsg={(username === text.user)}
                                         msg={text.content}
                                         time={text.time} sendername={text.user}/>)
                    })}
                </div>
                <FormChat/>
            </div>
        </div>
    )
}


export default Chat