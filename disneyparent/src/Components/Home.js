import React from 'react';
import {Link} from 'react-router-dom';

const  Home = () => {
  return (
    <div className = 'parent div'>
      <div classname = 'users'>
          <div className = 'title'>Are you a Parent or Volunteer?</div>

          <Link to="/parent-Register-form">
            <p>Parent</p>
          </Link> 
          <Link to="/volunteer-Register-form">
            <p>Volunteer</p>
          </Link>
      </div>
      <div className = 'registered'>Already have an Account?</div>
      <Link to="/login">
        <p>Login</p>
      </Link>
    </div>
  );
}

export default Home;