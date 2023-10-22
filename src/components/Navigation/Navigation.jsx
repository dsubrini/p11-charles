import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/actions/user.action';

import Logo from '../../assets/argentBankLogo.png';

export default function Navigation() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // console.log(user);
  console.log(user.id);

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
        {!user.id && (
          <NavLink to="/signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i>Sign in
          </NavLink>
        )}

        {user.id && (
          <NavLink to="/user" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </NavLink>
        )}

        {user.id && (
          <NavLink
            to="/"
            className="main-nav-item"
            onClick={() => {
              dispatch(logout());
            }}
          >
            <i className="fa fa-sign-out"></i>Sign Out
          </NavLink>
        )}
      </nav>
    </header>
  );
}
