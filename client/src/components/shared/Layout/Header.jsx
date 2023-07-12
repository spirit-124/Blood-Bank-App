import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-success  ">
        <div className="container-fluid">
          <div className="navbar-brand h1">Blood Bank App</div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">Welcome</p>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger">Submit</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
