import LoginForm from "./LoginForm";
import './Login.css'

const Login = (props) => {

    return (
        <div className="login-content">
            <LoginForm name={props.username} handler={props.getName}/>
        </div>
    )
}

export default Login;