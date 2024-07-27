import React, { useState } from 'react'
import '../css/Login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const [result,setResult]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault();
        const loginData= async ()=>{
          const token=localStorage.getItem('guesttoken')
            const response=await axios.post("http://localhost:5000/userlogin",{email,password,token})
            const responseData=response.data;
            if(responseData.response==="0"){
                setResult("User does not exist")
            }
            else if(responseData.response==="1"){
              localStorage.setItem('token',responseData.token)
                navigate('/userdashboard')
            }
            else if(responseData.response==="2"){
                setResult("Invalid credentials")
            }
            else{
                setResult(responseData.response)
            }
        }
        loginData();
    }
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const handleLogin = () => {
    //   const token=localStorage.getItem('token')
    //   if(token){
    //     localStorage.getItem()
    //     setIsLoggedIn(true);
    //   }
      
    // };
  
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
    <div className='logincontainer'>
    <center><h3 className='display-6'>User Login</h3></center>
      <form onSubmit={handleLogin}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input required type="email" className="form-control"  aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email'/>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input required type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password'/>
  </div>
  <center><button type="submit" className="btn btn-outline-danger">Login</button></center>
</form><br/>
<div className="container">
      <div className="row">
          <center>
            <h6>{result}</h6>
          </center>
      </div>
    </div><br/>
<div className='container'>
<div className='row'>
    <div className='col-6'>
    <div><p>Don't have an account?  <Link to='/userregister' id="reglink">Register</Link></p></div>
    </div>
    <div className='col-6'><div><Link to='/email' id='forgot'>Forgot password?</Link></div></div>
  </div>
</div>
</div>
</>
  )
}
