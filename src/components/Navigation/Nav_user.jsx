import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/argentBankLogo.png";

export default function Nav_user() {
    const user = useSelector((store) => store.user);
    console.log(user);
    return (
        <header className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <nav>
                {user.token && (
                    <NavLink to="/user" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>$\{user.userName}
                    </NavLink>
                )}
                {!user.token && <NavLink to="/">Sign Out</NavLink>}
            </nav>
            {/* {user.test !== "" && <p>{user.test}</p>} */}
        </header>
    );
}
