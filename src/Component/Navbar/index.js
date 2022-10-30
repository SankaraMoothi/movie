import "./Nav.css";
import { Link } from "react-router-dom";
function Navication() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info mb-4">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Movie Hub
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <button type="button" className="btn btn-success">
                <Link className="nav-link text-dark" to="/user">
                  Add Data
                </Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navication;
