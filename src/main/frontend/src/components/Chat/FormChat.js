import './form-chat.css'
import {useContext, useRef} from 'react'
import {UserContext} from '../../context-api/UserContext'
import {sendMessage} from "../../Websocket/WebSocket";

const FormChat = () => {
    const {logged, stomp, user} = useContext(UserContext);
    const [username, setUsername] = user;
    const [stompC, setStompC] = stomp;
    const [isAuthenticated] = logged;
    const msgInput = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        let message = event.target.msg.value;

        //send the message to the server to show to all the subscribers of the socket
        stompC && sendMessage(stompC, message, username);

        //to clear the input when we have the msg submitted
        msgInput.current.value = '';
    }

    return (
        <form className="form-chat" onSubmit={handleSubmit}>
            <input
                ref={msgInput}
                type="text"
                name="msg"

                placeholder="Type a message"
                className={isAuthenticated ? 'active-input' : 'disactive-input'}/>

            <input type="submit"
                   value="SEND"
                   className={isAuthenticated ? 'active-input' : 'disactive-input'}
                   disabled={!isAuthenticated}/>
        </form>
    )
}

export default FormChat