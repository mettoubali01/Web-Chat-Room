import {useContext} from 'react';
import {Link, Route, useHistory} from "react-router-dom";
import {UserContext} from "../../context-api/UserContext";
import {toastAdviser} from "../../utils/ToastAdviser";
import {disconnect} from "../../Websocket/WebSocket";
import './Nav.css';

function Nav() {

    const history = useHistory();
    const {logged, stomp} = useContext(UserContext);
    const [stompC, setStompC] = stomp;
    const [isAuthenticated, setIsAuthenticated] = logged;
    const messageInfo = "Logged out"
    const messageType = 'success';

    const handleLogout = () => {
        setIsAuthenticated(false);

        //disconnect from the websocket
        disconnect(stompC)
        toastAdviser(messageInfo, messageType);

        history.push("/");
    }

    return (
        <Route>
            <ul>
                <li>
                    <Link to="/chat">Chat</Link>
                </li>
                <li>
                    {!isAuthenticated && <Link to="/">Login</Link>}
                </li>
                <li>
                    {isAuthenticated && <a href={""} onClick={handleLogout}>Logout</a>}
                </li>
            </ul>
        </Route>
    )
}

export default Nav;