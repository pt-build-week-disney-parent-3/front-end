import React, {useState} from 'react';
import {axiosWithAuth} from "../auth/axiosWithAuth";
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ImageSrc from '../images/disneycastle1.png';


    // @import url('https://fonts.googleapis.com/css?family=Gentium+Basic&display=swap')
    // body {  
    //     font-family: 'Gentium Basic';
    // }




const Container = styled.div`
display: flex;
flex-direction: row;
align-content: center;
justify-content: spaced-evenly;
height: auto;
font-family: 'Gentium Basic';
`


const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-content: left;
justify-content: center;
padding-left: 20%;
padding-right: 20%;
width: 60%;

`
const Title = styled.h1`
text-align: left;

`

const InputField = styled.input`
border: 1px solid black;
border-radius: 5px;

`

const ButtonContainer = styled.div`
padding-left: 10%;

`

const Button = styled.button`
border-radius: 5px;
background-color: #EEEEEE;

`

const SignIn = styled.a`
box-shadow: 0px 1px 0px 0px #f0f7fa;
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
height: auto;
text-align: center;
background-color: #EEEEEE;
background-image: url('../images/disneycastle1.png');

`

const P = styled.p`
padding: 10%;


`



function ParentRegisterForm(props) {

  const [credentials, setCredentials] = useState({});
   
     const parentRegister = e => {
        e.preventDefault();
        axiosWithAuth().post('/auth/register', {...credentials, type: "parent"})
                .then(res => {
                    console.log(res.data)

                    
                    props.history.push('/login');
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
                    <label>First Name</label><br/>
                    <InputField 
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={credentials.firstName}
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
                    <label>Password</label><br/>
                    <InputField  
                    name="password"
                    type="password"
                    placeholder="*******"
                    value={credentials.password}
                    onChange={registerChangeHandler}
                    />
                </div><br/>
                <ButtonContainer>
                <Button type="submit">Lets Go!</Button>
                </ButtonContainer>
            </form>
        </FormContainer>
        <WelcomeContainer>
            <h1>Welcome Back!</h1>
            <P>Use your email to sign back in and check on your parent request!</P><br/>
            <SignIn href="/Signin">Sign In</SignIn>
            <img src= {ImageSrc} alt='disney castle' />
        </WelcomeContainer>

    </Container>
  );
}



export default withRouter(ParentRegisterForm);