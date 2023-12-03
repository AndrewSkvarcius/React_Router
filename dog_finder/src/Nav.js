import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';


function Nav({ dogs }) {
    const doglink = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
          {dog.name}
        </NavLink>
    ));
  return (
    <nav className='NavBar'>
        <NavLink exact to="/dogs">Home</NavLink>
        {doglink}
    </nav>

  )
  }
export default Nav;