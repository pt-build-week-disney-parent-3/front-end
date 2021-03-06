import React from 'react';
import styled from 'styled-components'

const NavBar = styled.ul`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-content: space-between;
list-style-type: none;
width: 100%;
`

const Nav = styled.li`
display: flex;

`
const NavItem = styled.a`
box-shadow: 0px 2px 0px 0px #000000;
background:linear-gradient(to bottom, #33bdef 5%, #019ad2 100%);
background-color:#009DDC;
border-radius:6px;
border:1px solid #057fd0;
cursor:pointer;
color:#2F2F2F;
font-family:Arial;
font-size:14px;
font-weight:bold;
padding: 6px 10px;
text-align: center;
text-decoration: none;
text-shadow:0px -1px 0px #5b6178;
width: auto;
margin: 5px;

&:hover {
    background:linear-gradient(to bottom, #019ad2 5%, #33bdef 100%);
    background-color:#019ad2;
    text-decoration: none;
}

&:active {
    position:relative;
	top:1px;
}

`
const Navigation = (props) => {


        return (
            <div>
                <NavBar>
                    <Nav>
                        <NavItem href = '/'>Home</NavItem>
                    </Nav> 
                    <Nav>      
                        <NavItem href = '/Parent-Register/'>Parent Register</NavItem>
                    </Nav>
                    <Nav>
                         <NavItem href = '/Volunteer-Register/'>Volunteer Register</NavItem>
                    </Nav>
                    <Nav>
                         <NavItem href = '/Parents-Login/'>Sign In</NavItem>
                    </Nav>
                    
                </NavBar>
            </div>
        )
}

export default Navigation;