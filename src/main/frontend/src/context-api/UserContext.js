import React, {createContext, useState} from "react";

export const UserContext = createContext();

export const UserProvider = props => {
    const [username, setUsername] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [stompC, setStompC] = useState();

    return (
        <UserContext.Provider
            value={{
                user: [username, setUsername],
                logged: [isAuthenticated, setIsAuthenticated],
                stomp : [stompC, setStompC]
            }}>
            {props.children}
        </UserContext.Provider>
    )
}