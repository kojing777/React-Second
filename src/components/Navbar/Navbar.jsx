import React from 'react';
import './Navbar.css';
import logo_light from '../../assets/logo-black.png';
import logo_dark from '../../assets/logo-white.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    const newTheme = theme == 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    notify(newTheme); // Call the notify function with the new theme
  };

  const notify = (newTheme) => {
    toast(`Switched to ${newTheme} mode!`);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={theme =='light' ? logo_light : logo_dark} className='logo' alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">about</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div>
          <img onClick={toggle_mode} src={theme == 'light' ? toggle_light : toggle_dark} className='toggle' alt="" />
          <ToastContainer />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;