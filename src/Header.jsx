import { Link } from "react-router-dom";
import { Logout } from "./Logout";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg forest-bg fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          Montana Cost of Living
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/cities">
                Cities List
              </Link>
            </li>
            {localStorage.jwt === undefined ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Logout />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
