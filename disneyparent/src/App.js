import React from 'react';
import './App.css';

import SignInForm from './Components/SignInForm';
import VolunteerForm from './Components/VolunteerForm';

import {Route}from "react-router-dom";


function App() {
  return (
    <div>
      
      <Route path = "/SignIn"  render={(routeParams)=>{return <SignInForm {...routeParams}  />}}/>
      <Route path = "/Volunteer"  render={(routeParams)=>{return <SignUpForm {...routeParams}  />}}/>
    </div>
  );
}

export default App;
