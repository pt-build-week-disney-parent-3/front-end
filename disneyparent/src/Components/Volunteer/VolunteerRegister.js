import React, {useState} from 'react';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../Navigation/Nav';
import '../../App.css';

const Container = styled.div`
display: flex;
flex-direction: row;
align-content: center;
justify-content: spaced-evenly;
height: 900px;
font-family: 'Gentium Basic';
`


const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-content: left;
justify-content: center;
padding-left: 20%;
padding-right: 20%;
width: 70%;
height: auto;

`
const Title = styled.h1`
text-align: left;

`

const InputField = styled.input`
border: 1px solid black;
border-radius: 5px;
width: 100%;

`

const ButtonContainer = styled.div`
padding-left: 10%;

`

const Button = styled.button`
border-radius: 5px;
background-color: #EEEEEE;

`

const SignIn = styled.a`
box-shadow: 0px 2px 0px 0px #000000;
background:linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
background-color:#009DDC;
border-radius:6px;
border:1px solid #057fd0;
display:inline-block;
cursor:pointer;
color:#2F2F2F;
font-family:Arial;
font-size:15px;
font-weight:bold;
padding:6px 24px;
text-decoration:none;
text-shadow:0px -1px 0px #5b6178;
width: 100px;
margin-left: 40%;


&:hover {
    background:linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
	background-color:#019ad2;
}

&:active {
    position:relative;
	top:1px;
}

`

const WelcomeContainer = styled.div`
display: flex;
flex-direction: column;
width: 50%;
height: 800px;
text-align: center;
background-color: #EEEEEE;

`

const P = styled.p`
padding: 10%;


`

const WelcomeTitle = styled.h1`
margin-top: 10%;
`





function VolunteerRegisterForm(props) {

  const [credentials, setCredentials] = useState({});

    
  const volunteerRegister = e => {
     e.preventDefault();
     axios
      .post('https://disney-parent-3.herokuapp.com/api/auth/register/contractor', credentials)
      .then(res => {
                 console.log(res.data)

                 
                 props.history.push('/Volunteer-Login');
             })
             .catch(err => console.log(err.message));
 }

 const registerChangeHandler = event => {

     setCredentials({
         ...credentials,
          [event.target.name]: event.target.value 
         });
 }

 const handleClick = event => {
        
  setCredentials({
      ...credentials,
      [event.target.name]: !!event.target.value
  });
}

  return (
    <div>
      <Navbar />
    <Container>
      <FormContainer>
      <Title className = 'volunteer-register'>Create an Account</Title>
      <form onSubmit={volunteerRegister}>
    
        <div>
          <label>Username</label>
            <InputField 
              name="username"
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={registerChangeHandler}
            />
        </div><br/>
        <div>
          <label>Password</label>
            <InputField  
              name="password"
              type="password"
              placeholder="*******"
              value={credentials.password}
              onChange={registerChangeHandler}
            />
        </div><br/>
        <div>
         <label>First Name</label>
            <InputField 
              name="first_name"
              type="text"
              placeholder="First Name"
              value={credentials.first_name}
              onChange={registerChangeHandler}
            />
        </div><br/>
        <div>
          <label>Last Name</label>
            <InputField 
              name="last_name"
              type="text"
              placeholder="Last Name"
              value={credentials.last_name}
              onChange={registerChangeHandler}
            />
        </div><br/>
        <div>
          <label>Email</label>
            <InputField 
              name="email"
              type="email"
              placeholder="Email"
              value={credentials.email}
              onChange={registerChangeHandler}
            />
        </div><br/>
        <div>
          <label>Date of Birth</label>
            <InputField 
              name="dob"
              type="date"
              placeholder="DOB"
              value={credentials.dob}
              onChange={registerChangeHandler}
            />
        </div><br/>
        <div>
          <label>Phone Number</label>
            <InputField 
              name="phone_number"
              type="integer"
              placeholder="123-456-7891"
              value={credentials.phone_number}
              onChange={registerChangeHandler}
            />
        </div><br/>
        <div>
          <label>Cost per Child</label>
            <InputField 
              name="price"
              type="float"
              placeholder="ex: 20.00"
              value={credentials.price}
              onChange={registerChangeHandler}
            />
          </div><br/>
          <div>
                <label>CPR Certified</label>
                <div>
                <div>
                    <input  
                    name="cpr_cert"
                    type="radio"
                    value={true}
                    onChange = {handleClick}
                    />
                    Yes
                </div>
                <div>
                    <input
                    name="cpr_cert"
                    type="radio"
                    value={undefined}
                    onChange = {handleClick}
                    />
                    No
                </div>
                </div>
            </div>
        <ButtonContainer>
          <Button type="submit">Register!</Button>
        </ButtonContainer>
      </form>
      </FormContainer>

      <WelcomeContainer className = 'welcome'>
            <WelcomeTitle >Welcome Volunteers!</WelcomeTitle>
            <P>Use your email to sign back in and check on your parent request!</P><br/>
            <SignIn href="/Parent-Register">Parent? Click here!</SignIn>
            
        </WelcomeContainer>

    </Container>
    </div>
  );
}


export default withRouter(VolunteerRegisterForm);
