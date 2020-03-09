import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navigation/Nav';
import styled from 'styled-components';
import '../App.css';


const Container = styled.div`
display: flex;
flex-direction: column;
margin: 25%;
width: 50%;
align-content: center;
justify-content: center;
text-align: center;
`
const Container2 = styled.div`
display: flex;
flex-direction: column; 
align-content: center;
justify-content: center;
text-align: center;
`


const  Home = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <div>
          <h1 className = 'title'>Welcome! </h1>
          <p>Are you a Parent, or a Volunteer?</p>

            <Link to="/Parent-Register" className = 'SignIn'>
              <p>Parent</p>
            </Link> 
            <Link to="/Volunteer-Register" className = 'SignIn'>
              <p>Volunteer</p>
            </Link>
        </div>
      
      <Container2>
        <div className = 'registered'>Already have an Account?</div>
        <Link  to='/Parents-Login' className = 'SignIn' style = {{marginLeft: '39%'}} >  
            <p>Login</p>
        </Link>
      </Container2>
      </Container>
    </div>
  );
}

export default Home;