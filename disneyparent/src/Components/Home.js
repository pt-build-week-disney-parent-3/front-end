import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navigation/Nav';


const  Home = () => {
  return (
    <div className = 'parent div'>
      <Navbar />
      <div className = 'users'>
        <div className = 'title'>Are you a Parent or Volunteer?</div>

          <Link to="/Parent-Register">
            <p>Parent</p>
          </Link> 
          <Link to="/Volunteer-Register">
            <p>Volunteer</p>
          </Link>
      </div>
      <div className = 'registered'>Already have an Account?</div>
       <Link to='/Parents-Login'>  
          <p>Login</p>
      </Link>
    </div>
  );
}

export default Home;