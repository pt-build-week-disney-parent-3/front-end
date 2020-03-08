import React, { useState } from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
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
        axios
        .post('https://disney-parent-3.herokuapp.com/api/auth/login/parent', object)
        .then(res => {
            console.log(res);

            localStorage.setItem('token', res.data.authToken);
            props.history.push('/Dashboard');
        })
        .catch(err => console.log(err));

    };

    return (
        <Container>
             <WelcomeContainer className = 'welcome'>
            <WelcomeTitle >Welcome Back!</WelcomeTitle>
            <P>Use your email to sign back in and check on your parent request!</P><br/>
        
            
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