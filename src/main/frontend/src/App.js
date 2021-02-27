import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";
import React, {Fragment, Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {UserProvider, UserContext} from './context-api/UserContext';
import {toast} from "react-toastify";

toast.configure()

class App extends Component {

    static contextType = UserContext

    constructor(props, context) {
        super(props, context);

        this.state = {
            name: ""
        }
    }

    handleName = (event) => {
        this.setState({
            name: event
        })
    }

    render() {
        return (
            <UserProvider>
                <Fragment>
                    <Router>
                        <Header/>
                        <Switch>
                            <Route path={"/chat"} exact>
                                <Chat username={this.state.name} getName={this.handleName}/>
                            </Route>
                            <Route path={"/"} exact>
                                <Login username={this.state.name} getName={this.handleName}/>
                            </Route>
                        </Switch>
                    </Router>
                </Fragment>
            </UserProvider>
        );
    }
}

export default App;
