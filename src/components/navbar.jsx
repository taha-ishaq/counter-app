import React, { Component } from 'react';

const Navbar = ({totalCounters}) => {
  return (  
      <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar
     <span>{totalCounters}</span>
    </a>
  </div>
</nav> );
}
 
export default Navbar;
