import React, { useState } from 'react'
import '../css/Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Sellhouse() {
  const navigate=useNavigate();
    const [data,setData]=useState({
        year:"",
        area:"",
        landtype:",",
        address:"",
        img1:"",
        img2:"",
        cost:""
    })

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const { year,area,landtype,address,img1,img2,cost } = data;
    

    // const handleLogin=(e)=>{
    //     e.preventDefault();
    //     const loginData= async ()=>{
    //       const token=localStorage.getItem('guesttoken')
    //         const response=await axios.post("http://localhost:5000/userlogin",{email,password,token})
    //         const responseData=response.data;
    //         if(responseData.response==="0"){
    //             setResult("User does not exist")
    //         }
    //         else if(responseData.response==="1"){
    //           localStorage.setItem('token',responseData.token)
    //             navigate('/userdashboard')
    //         }
    //         else if(responseData.response==="2"){
    //             setResult("Invalid credentials")
    //         }
    //         else{
    //             setResult(responseData.response)
    //         }
    //     }
    //     loginData();
    // }

  const submitHandler=(e)=>{
    e.preventDefault()
    const token=localStorage.getItem('token')
    if(!token){
      alert('login')
      navigate('/userlogin')
    }
    else{
    const submitLand=async ()=>{
      const token=localStorage.getItem('token')
      const response=await axios.post("http://localhost:5000/sellland",{ year,area,landtype,address,img1,img2,cost,token } )
      const responseData=response.data;
      if(responseData['response']==="1"){
        alert("Property added successfully")
      }
  }
  submitLand()
  }
}

  return (
<>
<div>
          <div className='logincontainer'>
    <center><h3 className='display-6'>Land Details</h3></center>
      <form onSubmit={submitHandler} >
  <div className="mb-3">
    <label  className="form-label">Land shape</label>
    <input required type="text" className="form-control"  value={year} onChange={changeHandler} placeholder='Regular or irregular' name='year'/>
    </div>
  <div className="mb-3">
    <label  className="form-label">Area(in sq.ft)</label>
    <input required type="number" className="form-control"  value={area} onChange={changeHandler} placeholder='Enter area of the house' name='area'/>
  </div>
  <label  className="form-label">Land use</label>
  <select className="form-select" aria-label="Default select example" value={landtype} onChange={changeHandler} name='landtype'>
  <option selected>Select land use</option>
  <option value="agricultural">Agricultural</option>
  <option value="residential">Residential</option>
  <option value="commercial">Commercial</option>
  <option value="industrial">Industrial</option>
</select>
<div className="form-group" >
    <label for="exampleFormControlTextarea1" style={{marginTop:"10px"}}>Address</label>
    <textarea className="form-control" placeholder='Enter address' id="exampleFormControlTextarea1" rows="3" name='address' value={address} onChange={changeHandler}></textarea>
  </div>
  <div className="mb-3">
    <label  className="form-label">Images</label>
    <input required type="text" className="form-control"  value={img1} onChange={changeHandler} placeholder='Exterior image' name='img1'/><br/>
    <input required type="text" className="form-control"  value={img2} onChange={changeHandler} placeholder='Interior image' name='img2'/>
    </div>
    <div className="mb-3">
    <label  className="form-label">Cost of property</label>
    <input required type="number" className="form-control"  value={cost} onChange={changeHandler} placeholder='Enter cost you want to sell' name='cost'/>
    </div>
  <center><button type="submit" className="btn btn-outline-danger my-4">Submit Details</button></center>
</form><br/>
</div>
    </div>
</>
  )
}
