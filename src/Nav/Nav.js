import React from "react";
import { NavLink } from "react-router-dom";

import './Nav.css'

const Nav = ({names}) => {
  return (
    <nav className="Nav">
      <NavLink className="Nav-tab" exact to="/dogs">Home</NavLink>
      {names.map(name => {
        return (
          <NavLink className="Nav-tab" exact to={`/dogs/${name}`} key={name}>{name}</NavLink>
        )
      })}
    </nav>
  )
}

export default Nav;