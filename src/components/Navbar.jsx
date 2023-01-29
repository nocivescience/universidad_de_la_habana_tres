import '../static/css/Navbar.css'
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand navegador" to='/'>
            Inicio
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="lista">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active navegador" aria-current="page" to='/facultades'>
                    Facultades
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link navegador" to="/expocuba">
                    ExpoCuba
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link navegador" to="palaciopioneros">
                    Palacio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link navegador" to="/ctc">
                    CTC
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Feem
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Ctc
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    English
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    France
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    English
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    France
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
