import React, {useState} from 'react';
import {axiosWithAuth} from "../auth/axiosWithAuth";
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';


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
     axiosWithAuth()
      .post('https://disney-parent-3.herokuapp.com/api/auth/register/contractor', credentials)
      .then(res => {
                 console.log(res.data)

                 
                 props.history.push('/login');
             })
             .catch(err => console.log(err));
 }

 const registerChangeHandler = event => {

     setCredentials({
         ...credentials,
          [event.target.name]: !!event.target.value 
         });
 }

 const handleClick = event => {
        
  setCredentials({
      ...credentials,
      [event.target.name]: !!event.target.value
  });
}

  return (
    <Container>
      <FormContainer>
      <Title className = 'volunteer-register'>Volunteer Register Form</Title>
      <form onSubmit={volunteerRegister}>
    
        <div>
            <InputField 
              name="username"
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <InputField  
              name="password"
              type="password"
              placeholder="*******"
              value={credentials.password}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <InputField 
              name="firstName"
              type="text"
              placeholder="First Name"
              value={credentials.firstName}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <InputField 
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={credentials.lastName}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <InputField 
              name="email"
              type="email"
              placeholder="Email"
              value={credentials.email}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <InputField 
              name="DOB"
              type="date"
              placeholder="DOB"
              value={credentials.DOB}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <InputField 
              name="phoneNum"
              type="text"
              placeholder="Phone Num."
              value={credentials.phoneNum}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <InputField 
              name="avgPerChild"
              type="number"
              placeholder="Average Cost"
              value={credentials.avgPerChild}
              onChange={registerChangeHandler}
            />
          </div>
          <div>
                <label>CPR Certified</label>
                <div>
                <div>
                    <input  
                    name="CPR_Certified"
                    type="radio"
                    value={true}
                    onChange = {handleClick}
                    />
                    Yes
                </div>
                <div>
                    <input
                    name="CPR_Certified"
                    type="radio"
                    value={null}
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
            <WelcomeTitle >Welcome Back!</WelcomeTitle>
            <P>Use your email to sign back in and check on your parent request!</P><br/>
            <SignIn href="/volunteer">Sign In</SignIn>
            
        </WelcomeContainer>

    </Container>
  );
}


export default withRouter(VolunteerRegisterForm);
