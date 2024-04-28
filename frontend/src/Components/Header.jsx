import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = ({ onSearch }) => { 
  const location = useLocation();
  const showSearchBar = location.pathname === '/ideas';
  
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-secondary text-white p-4 mb-5 d-flex justify-content-center">
        <div className="container">
          <Link className="navbar-brand text-white fs-1 " to="/">INNONEST</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {showSearchBar && <SearchBar onSearch={onSearch} /> }
          <div className="collapse navbar-collapse text-end " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item text-lg-end text-end">
                <Link className="nav-link text-white fs-4 " to="/ideas">Ideas</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
