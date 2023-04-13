import "../assets/Styles/header.css";

import { Outlet, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Header() {
  const { authState, logout } = useAuth();

  return (
    <div>
      <nav className="navbar">
        <div className="inner-width">
          <a href="/" className="logo"></a>
          <p>Money Street</p>
          <br></br>
          <button className="menu-toggler"></button>

          <div className="navbar-menu">
            <Link to="/">Home</Link>

            {authState.isAuthenticated ? (
              <>
                <Link to="/login" onClick={logout}>
                  Logout
                </Link>
                <img
                  src={authState.user.profile}
                  width={40}
                  height={40}
                  className="rounded-circle ms-2"
                />
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}

            <Link to="/cajero">Cajero</Link>
          </div>
        </div>
      </nav>{" "}
      <Outlet />
    </div>
  );
}

export default Header;
