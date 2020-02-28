import React from 'react';
import './App.css';

import SignInForm from './Components/SignInForm';

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
      <Route path = "/SignIn"  render={(routeParams)=>{return <SignInForm {...routeParams}  />}}/>
      <Route path = "/Volunteer"  render={(routeParams)=>{return <SignUpForm {...routeParams}  />}}/>
    </div>
  );
}

export default App;
