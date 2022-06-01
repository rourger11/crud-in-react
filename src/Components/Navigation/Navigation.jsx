import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Home from "../Homepage/Home";

import "./Navbar.css";

export default function Navigation() {
  let navigate = useNavigate();
  const [show, setshow] = useState(true);
  const addbutton = () => {
    navigate("/Newuser");
    setshow(false);
  };

  return (
    <>
      <ul className="navbar">
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        {show ? (
          <li>
            <Button className="adduser" onClick={addbutton}>
              Add User
            </Button>
          </li>
        ) : null}
      </ul>
    </>
  );
}
