import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  //   HANDLE LOGOUT
  const handleLogOut = () => {
    localStorage.clear();
    toast.success("User logged out");
    // alert("Logout Sucessfully");
    navigate("/login");
  };
  return (
    <div>
      <div className="navbar bg-success  ">
        <div className="container-fluid">
          <div className="navbar-brand h1">
            <BiDonateBlood color="red" /> Blood Bank App
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <BiUserCircle /> Welcome{" "}
                {user?.name || user?.hospitalName || user?.organizationName}{" "}
                &nbsp;
                <span className="badge bg-secondary"> {user?.role}</span>
              </p>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger " onClick={handleLogOut}>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
