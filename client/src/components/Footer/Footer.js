import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className="footer">

      <Link className="btn btn-md btn-warning m-2" to="/adminLogin">
          Admin
      </Link>

    </footer>
  );

}

export default Footer;