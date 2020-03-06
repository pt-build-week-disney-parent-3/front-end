import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../auth/axiosWithAuth";

import {connect} from "react-redux"
import { withRouter } from 'react-router-dom';


const EditChild = (props) => {

    const [credentials, setCredentials] = useState({
        id: Date.now(),
        name: props.children.name,
        DOB: props.children.DOB,
        allergies: props.children.allergies,
        special_instructions: props.chilren.special_instructions,
        medical_conditions: props.children.medical_conditions
        
    });
   console.log(credentials)
    const handleSubmit = e => {
        e.preventDefault();


        axiosWithAuth()
            .put(`/children/`)
            console.log("CHILD PROPS", props.id)
            .then(res => {
                console.log(res.data)
                props.history.push('/dashboard');
            })
            .catch(err => console.log(err));
   }

   const handleChanges = event => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value 
        });
   }

    return(
        <div>
        <h1>Edit your Account</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    name="name"
                    type="text"
                    placeholder="Child Name"
                    value={credentials.name}
                    onChange={handleChanges}
                    /> 
            </div>
            <div>
            <input 
                name="DOB"
                type="date"
                placeholder="DOB"
                value={credentials.DOB}
                onChange={handleChanges}
                />
            </div>
            <div>
            <input 
                name="allergies"
                type="text"
                placeholder="Allergies"
                value={credentials.allergies}
                onChange={handleChanges}
                />
            </div>
            <div>
            <input 
                name="special_instructions"
                type="text"
                placeholder="Special Instructions"
                value={credentials.special_instructions}
                onChange={handleChanges}
                />
            </div>
            <div>
            <input 
                name="medical_conditions"
                type="text"
                placeholder="Medical Conditions"
                value={credentials.medical_conditions}
                onChange={handleChanges}
                />
            </div>

            <div>
                <button type = 'submit'>Confirm Edits</button>
            </div>
        </form>
        </div>
    
    )
    }

    const mapStateToProps = (state) => {
        return ({
            children: state.children
        })
    }

    export default withRouter(connect(mapStateToProps, {})(EditChild));