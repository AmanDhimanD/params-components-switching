import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <center>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
          <li>
            {" "}
            <Link to="/user/ram">Ram</Link>
          </li>
          <li>
            {" "}
            <Link to="/user/sita">Sita</Link>
          </li>
        </ul>
      </center>
    </>
  );
};

export default Navbar;
