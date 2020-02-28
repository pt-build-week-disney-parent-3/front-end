import React, {useState} from 'react';
import {axiosWithAuth} from "../../auth/axiosWithAuth";
import { withRouter } from 'react-router-dom';

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
    <div>
      <h1 className = 'parent-register'>Parent Register Form</h1>
      <form onSubmit={parentRegister}>
          <div>
            <input 
              name="username"
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <input  
              name="password"
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <input 
              name="firstName"
              type="text"
              placeholder="First Name"
              value={credentials.firstName}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <input 
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={credentials.lastName}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <input 
              name="email"
              type="email"
              placeholder="Email"
              value={credentials.email}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <input 
              name="DOB"
              type="date"
              placeholder="DOB"
              value={credentials.DOB}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <input 
              name="phoneNum"
              type="text"
              placeholder="Phone Num."
              value={credentials.phoneNum}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <input 
              name="emergencyPhone"
              type="text"
              placeholder="Emergency Phone Num."
              value={credentials.emergencyPhone}
              onChange={registerChangeHandler}
            />
        </div>
        <div>
            <input 
                name = 'cpr'
                type = 'checkbox'
                value = {credentials.cpr}
                onChange = {registerChangeHandler}
            />
        </div>
        <div>
          <button type="submit">Register!</button>
        </div>
      </form>
    </div>
  );
}



export default withRouter(ParentRegisterForm);