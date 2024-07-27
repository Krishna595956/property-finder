import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.setItem('token',null)
    navigate('/')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-lg-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">PropFind</Link>
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
      {localStorage.getItem('token')===null ? (<><button className="btn btn-danger" onClick={handleLogout}>Logout</button></>) : (<><Link to='/userlogin'><button className="btn btn-danger" type="submit">Login</button></Link></>)}

    </div>
  </div>
</nav>
    </>
  )
}
