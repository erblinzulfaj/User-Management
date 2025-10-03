import {Link} from "react-router-dom";
import logo from "../assets/users.svg";

export default function Navbar() {
    return (
        <nav className="navbar bg-light">
            <div className="container">
                <div className="d-flex align-items-center gap-3">
                    <Link className="navbar-brand mb-0 h1" to="/">
                        <img src={logo} alt="Users" width={60} height={35}/>
                    </Link>

                    <Link className="nav-link" to="/">Home</Link>
                </div>
            </div>
        </nav>
    );
}