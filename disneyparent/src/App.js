import React from 'react';
import './App.css';

import ParentsForm from './Components/ParentsForm';

import VolunteerForm from './Components/VolunteerForm';
import Home from './Components/Home';


import {Route}from "react-router-dom";
import ParentRegisterForm from './Components/ParentRegister';
import VolunteerRegisterForm from './Components/VolunteerRegister';


function App() {
  return (
    <div>
      <Route exact path = '/' component = {Home} />
      <Route path = '/Parent-Register' component = {ParentRegisterForm} />
      <Route path = '/Volunteer-Register' component = {VolunteerRegisterForm} />
      <Route path = "/Parents"  render={(routeParams)=>{return <ParentsForm {...routeParams}  />}}/>
      <Route path = "/Volunteer"  render={(routeParams)=>{return <VolunteerForm {...routeParams}  />}}/>
    </div>
  );
}

export default App;
