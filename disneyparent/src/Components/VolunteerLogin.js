import React, { useState } from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {axiosWithAuth} from '../auth/axiosWithAuth';
import {withRouter} from 'react-router-dom';

function VolunteerLogin(props) {
    const [object, setObject] = useState({
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
            .post('/auth/login/volunteer', object)
            .then(res => {
                console.log(res);

                localStorage.setItem('token, res.data.token');
                props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
    };


    return (
        <div>
            <form onSubmit = {login}>
            <h1>Log In</h1>
            <div>
                <input
                name="username"
                type="text"
                placeholder="Username"
                value={object.username}
                onChange={handleChanges}
            />
            </div>
            <div>
                <input
                name="password"
                type="password"
                placeholder="Password"
                value={object.password}
                onChange={handleChanges}
            />
            </div>
            <div>
                <button type = 'submit'>Login</button>
            </div>
            </form>
        </div>
    
    )
  }
  export default withRouter(VolunteerLogin);