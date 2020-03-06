import React, {useState} from 'react';
import {axiosWithAuth} from "../auth/axiosWithAuth";
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css'


    // @import url('https://fonts.googleapis.com/css?family=Gentium+Basic&display=swap')
    // body {  
    //     font-family: 'Gentium Basic';
    // }




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



function ParentRegisterForm(props) {

  const [credentials, setCredentials] = useState({});
   
     const parentRegister = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('api/auth/register/parent', {...credentials, type: "parent"})
            .then(res => {
                    console.log(res.data)

                    
                    props.history.push('/Parent');
                })
            .catch(err => console.log(err));
    }

    const registerChangeHandler = event => {

        setCredentials({
            ...credentials,
             [event.target.name]: event.target.value 
            });
    }


  return (
    <Container>
        <FormContainer>
            <Title className = 'parent-register'>Create an Account</Title>
            <form onSubmit={parentRegister}>
                
                <div>
                    <label>Username</label><br/>
                    <InputField 
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={registerChangeHandler}
                    />
                </div>
                <div>
                    <label>Password</label><br/>
                    <InputField  
                    name="password"
                    type="password"
                    placeholder="*******"
                    value={credentials.password}
                    onChange={registerChangeHandler}
                    />
                </div><br/>
                <div>
                    <label>First Name</label><br/>
                    <InputField 
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={credentials.firstname}
                    onChange={registerChangeHandler}
                    />
                </div>
                <div>
                    <label>Last Name</label><br/>
                    <InputField 
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={credentials.lastName}
                    onChange={registerChangeHandler}
                    />
                </div>
                <div>
                    <label>Email</label><br/>
                    <InputField 
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                    value={credentials.email}
                    onChange={registerChangeHandler}
                    />
                </div>
                <div>
                    <label>Date of Birth</label><br/>
                    <InputField 
                    name="DOB"
                    type="date"
                    placeholder="DOB"
                    value={credentials.DOB}
                    onChange={registerChangeHandler}
                    />
                </div>
                <div>
                    <label>Phone Number</label><br/>
                    <InputField 
                    name="phonenumber"
                    type="number"
                    placeholder="123-456-7891"
                    value={credentials.phonenumber}
                    onChange={registerChangeHandler}
                    />
                </div>
                <label>CPR Certified</label>
            <div>
              <div>
                <input  
                  name="CPR_Certified"
                  type="radio"
                  value=""
                />
                Yes
              </div>
              <div>
                <input
                  name="CPR_Certified"
                  type="radio"
                  value="no"
                />
                No
              </div>
            </div>
                <ButtonContainer>
                <Button type="submit">Lets Go!</Button>
                </ButtonContainer>
            </form>
        </FormContainer>
        
        <WelcomeContainer className = 'welcome'>
            <WelcomeTitle >Welcome Back!</WelcomeTitle>
            <P>Use your email to sign back in and check on your parent request!</P><br/>
            <SignIn href="/Parents">Sign In</SignIn>
            
        </WelcomeContainer>
        
    </Container>
  );
}



export default withRouter(ParentRegisterForm);