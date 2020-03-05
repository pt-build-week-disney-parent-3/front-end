import React from 'react';
import {NavLink} from 'react-router-dom';


const  Home = () => {
  return (
    <div className = 'parent div'>
      <div className = 'users'>
        <div className = 'title'>Are you a Parent or Volunteer?</div>

          <NavLink to="/Search">
            <p>Search</p>
          </NavLink>
          <NavLink to="/Parent-Register">
            <p>Parent</p>
          </NavLink> 
          <NavLink to="/Volunteer-Register">
            <p>Volunteer</p>
          </NavLink>
      </div>
      <div className = 'registered'>Already have an Account?</div>
      <NavLink to='/Parents'>
        <p>Login</p>
      </NavLink>
    </div>
  );
}

export default Home;