import './message.css'
import {useRef, useEffect} from "react";

function Message(props) {
    const {sendername, msg, time, isMyMsg} = props;

    const conRef = useRef(null)

    //to scroll down when we have a lot of messages
    useEffect(() => {
        conRef.current.scrollIntoView({behavior: "smooth"})
    })

    return (
        //is the msg is yours we give it different color background
        <div className={isMyMsg ? 'message my-msg-bgColor' : 'message'} ref={conRef}>
            <p className="sender">{sendername}</p>
            <p className="msg">{msg}</p>
            <span className="created">{time}</span>
        </div>
    )
}

export default Message