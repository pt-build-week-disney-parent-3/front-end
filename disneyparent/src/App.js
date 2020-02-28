import React from 'react';
import './App.css';

import ParentsForm from './Components/ParentsForm';
import VolunteerForm from './Components/VolunteerForm';

import {Route}from "react-router-dom";


function App() {
  return (
    <div>
      
      <Route path = "/Parents"  render={(routeParams)=>{return <ParentsForm {...routeParams}  />}}/>
      <Route path = "/Volunteer"  render={(routeParams)=>{return <VolunteerForm {...routeParams}  />}}/>
    </div>
  );
}

export default App;
