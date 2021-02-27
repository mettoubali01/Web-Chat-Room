import {useState, useEffect, useContext} from 'react';
import {useHistory} from "react-router-dom";
import validateInfoForm from "../../utils/Utils";
import {toastAdviser} from "../../utils/ToastAdviser";
import {UserContext} from "../../context-api/UserContext";
import {connect} from "../../Websocket/WebSocket";

//we can call it the controller of the login form
const useLoginForm = _ => {

    const [values, setValues] = useState({
        name: ''
    });
    const [error, setError] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const {user, logged, stomp} = useContext(UserContext)
    const [username, setUsername] = user;
    const [isAuthenticated, setIsAuthenticated] = logged;
    const [stompC, setStompC] = stomp;
    const history = useHistory();
    const messageInfo = "Logged In"
    const messageType = 'success';

    //we save the values of the input
    const handleChange = e => {

        const {name, value} = e.target;

        setValues({
            [name]: value
        });
    }

    //validating the inputs
    const submit = e => {

        e.preventDefault();
        setError(validateInfoForm(values));
        setSubmitted(true);
    }

    //checking if the errors and the submit state
    //to retrieve the chat room
    useEffect(() => {

        //Connecting to the socket
        connect(setStompC);

        //Go to chat room in case no error and the form is submitted
        //showing success toast
        if (Object.keys(error).length === 0 && submitted) {
            setUsername(values.name);
            setIsAuthenticated(true);
            history.push('/chat');
            toastAdviser(messageInfo, messageType);
        }
    }, [error])

    return {values, handleChange, submit, error}
}

export default useLoginForm