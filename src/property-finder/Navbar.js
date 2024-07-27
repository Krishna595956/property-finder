import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    const token=localStorage.getItem('token')
    if(token){
      localStorage.getItem()
      setIsLoggedIn(true);
    }
    
  };

  const handleLogout = () => {
    const token=localStorage.getItem('token')
    if(token){
      localStorage.removeItem('token')
    setIsLoggedIn(false);
    }

  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-lg-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">PropFind</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/confirm">Sell property</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/buyprop">Buy property</Link>
        </li>
      </ul>
      <button className='btn btn-danger'  onClick={isLoggedIn ? handleLogout : handleLogin}>{isLoggedIn ? 'Logout' : 'Login'}</button>
         </div>
  </div>
</nav>
    </>
  )
}
