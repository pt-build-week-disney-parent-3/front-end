import React from 'react';
import {Link} from 'react-router-dom';


const  Home = () => {
  return (
    <div className = 'parent div'>
      <div className = 'users'>
          <div className = 'title'> Are you a Parent or Volunteer?</div>

          <Link to="/Parent-Register">
            <p>Parent</p>
          </Link> 
          <Link to="/Volunteer-Register">
            <p>Volunteer</p>
          </Link>
      </div>
      <div className = 'registered'>Already have an Account?</div>
      <Link to="/Signin">
        <p>Login</p>
      </Link>
    </div>
  );
}

export default Home;