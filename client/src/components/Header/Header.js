import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images2/reShift.jpeg'

function Header() {

  return (
    <header className="header">

      <Link to="/">
        <img className='logo' src={Logo} alt='company logo.'></img>
      </Link>
     

    </header>
  );

}

export default Header;