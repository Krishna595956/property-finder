import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './property-finder/Navbar'
import Login from './property-finder/Ulogin'
import Register from './property-finder/Userregister'
import Email from './property-finder/Email'
import Userdashboard from './property-finder/Userdashboard'
import Otp from './property-finder/Otp'
import Buyprop from './property-finder/Buyprop'
import Confirmation from './property-finder/Confirmation'
import Sellhouse from './property-finder/Sellhouse'
import Sellapartment from './property-finder/Sellapartment'
import Sellland from './property-finder/Sellland'
import Filterapartment from './property-finder/Filterapartment'
import Filterlands from './property-finder/Filterlands'
import Filterhouses from './property-finder/Filterhouses'

export default function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Buyprop/>}></Route>
      <Route path='/userlogin' element={<Login/>}></Route>
      <Route path='/userregister' element={<Register/>}></Route>
      <Route path='/email' element={<Email/>}></Route>
      <Route path='/userdashboard' element={<Userdashboard/>}></Route>
      <Route path='/otp' element={<Otp/>}></Route>
      <Route path='/buyprop' element={<Buyprop/>}></Route>
      <Route path='/confirm' element={<Confirmation/>}></Route>
      <Route path='/sellhouse' element={<Sellhouse/>}></Route>
      <Route path='/sellapartment' element={<Sellapartment/>}></Route>
      <Route path='/sellland' element={<Sellland/>}></Route>
      <Route path='/filterapartments' element={<Filterapartment/>}></Route>
      <Route path='/filterlands' element={<Filterlands/>}></Route>
      <Route path='/filterhouses' element={<Filterhouses/>}></Route>
     </Routes>
     </BrowserRouter> 
    </>
  )
}
