import Nav from "../Nav/Nav";
import './header.css';

function Header() {

    return (
        <header className="header">
            <span className="logo">Chat Room</span>
            <Nav/>
        </header>
    )
}

export default Header;