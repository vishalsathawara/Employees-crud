import './App.css'
import react, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios';

import EmployeeList from "./EmployeeList"
import EmployeeCreate from "./EmployeeCreate"

import EmployeeDetails from "./EmployeeDetails"

import EmployeeEdit from "./EmployeeEdit"
import Footer from "./Footer"

export default function App() {
  
      
  return (
    <>
      <div>
       <h1 className="text-center m-2">CRUD With Firebase Realtime Database</h1>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmployeeList />}></Route>

            <Route path='/employee/create' element={<EmployeeCreate />}></Route>

          <Route path="/employee/detail/:empid" element={<EmployeeDetails/>}></Route>

            <Route path="/employee/edit/:empid" element={<EmployeeEdit/>}></Route>
        </Routes>
      </BrowserRouter>
      </div>
   <div>
   <Footer/>
   </div>
    
    </>
  );
};
