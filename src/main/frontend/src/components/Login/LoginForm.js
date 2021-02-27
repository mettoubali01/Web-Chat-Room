import './LoginForm.css'
import useLoginForm from "./useLoginForm";

function LoginForm() {
    const {values, handleChange, submit, error} = useLoginForm();

    return (
        <form onSubmit={submit}>
            <input id="name"
                   name="name"
                   type="text"
                   value={values.name}
                   onChange={handleChange}
                   placeholder="Your Name"/>
            {error && <p className="error">{error.name}</p>}
            <div className="login-btn">
                <input type="submit" value="SUBMIT"/>
            </div>
        </form>
    )
}

export default LoginForm