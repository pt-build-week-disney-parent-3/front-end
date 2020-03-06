import React, { useState } from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import { withRouter } from 'react-router-dom';

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



function ParentsLogin(props) {

    const [object, setObject] =useState({
        username: '',
        password: ''
    });
    

    console.log(object)
    const handleChanges = (e) => {
    setObject({...object, [e.target.name]: e.target.value})
}


    const login = (e) => {

    e.preventDefault()
        axiosWithAuth()
        .post('/api/auth/login/parent', object)
        .then(res => {
            console.log(res);

            localStorage.setItem('token', res.data.token);
            props.history.push('/dashboard');
        })
        .catch(err => console.log(err));

    };

    return (
        <Container>
             <WelcomeContainer className = 'welcome'>
            <WelcomeTitle >Welcome Back!</WelcomeTitle>
            <P>Use your email to sign back in and check on your parent request!</P><br/>
            <SignIn href="/Parents">Sign In</SignIn>
            
        </WelcomeContainer>
        <FormContainer>
            <Title > Parents Login</Title>
            <form onSubmit={login}>
                
                <div>
                    <label>Username</label><br/>
                    <InputField 
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={object.username}
                    onChange={handleChanges}
                    />
                </div>
                <div>
                    <label>Password</label><br/>
                    <InputField  
                    name="password"
                    type="password"
                    placeholder="*******"
                    value={object.password}
                    onChange={handleChanges}
                    />
                </div><br/>
                
                
                
                
                <ButtonContainer>
                <Button type="submit">Log in</Button>
                </ButtonContainer>
            </form>
        </FormContainer>
        
       
        
    </Container>
        
        
    )



}   

export default withRouter(ParentsLogin);