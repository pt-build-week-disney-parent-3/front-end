import React from "react";
import {axiosWithAuth} from "../../auth/axiosWithAuth";
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ChildForm = (props) => {

    console.log(props.newChild)
  
      const childChangeHandler = e => {
          props.setNewChild({...props.newChild,
               [e.target.name]: e.target.value})
  
      }
  
      const addChild = e => {
          if (props.edit) {
          e.preventDefault();
              console.log("AddChild", props);
              axiosWithAuth()
              .post("https://disney-parent-3.herokuapp.com/api/children", {
                  first_name: props.newChild.first_name,
                  last_name: props.newChild.last_name,
                  DOB: props.newChild.DOB,
                  allergies: props.newChild.allergies,
                  special_instructions: props.newChild.special_instructions,
                  medical_conditions: props.newChild.medical_conditions
              })
              .then(res => {
                  console.log("editChild", res.data)
                  props.setNewChild({
                      name: "",
                      DOB: "",
                      allergies: "",
                      special_instructions: "",
                      medical_conditions: ""
                    });
                    props.setNewGetChild(true);
                  })
                  .catch(err => console.log(err));
              } else {
                e.preventDefault();
                axiosWithAuth()
                  .post("https://disney-parent-3.herokuapp.com/api/children", {
                    name: props.newChild.name,
                    DOB: props.newChild.DOB,
                    allergies: props.newChild.allergies,
                    special_instructions: props.newChild.special_instructions,
                    medical_conditions: props.newChild.medical_conditions
                })
                  .then(res => {
                    console.log("ADD", res.data);
                    props.setNewChild({
                      name: "",
                      DOB: "",
                      allergies: "",
                      special_instructions: "",
                      medical_conditions: ""
                    });
                    props.setNewGetChild(true);
                  })
                  .catch(err => console.log(err));
              }
            };
           
      
          return (
              <div>
                  <form onSubmit={addChild}>
                    <div>
                        <input
                            type="text"
                            name="first_name"
                            value={props.newChild.first_name}
                            onChange={childChangeHandler}
                            placeholder="First Name"
                        /> 
                    </div>
                    <div>
                        <input
                            type="text"
                            name="last_name"
                            value={props.newChild.last_name}
                            onChange={childChangeHandler}
                            placeholder="Last Name"
                        /> 
                    </div>
                    <div>
                        <input
                            type="date"
                            name="DOB"
                            value={props.newChild.DOB}
                            onChange={childChangeHandler}
                            placeholder="Date of birth"
                        /> 
                    </div>
                    <div>
                        <input
                            type="text"
                            name="allergies"
                            value={props.newChild.allergies}
                            onChange={childChangeHandler}
                            placeholder="Allergies"
                        /> 
                    </div>
                    <div>
                        <input
                            type="text"
                            name="medical_conditions"
                            value={props.newChild.medical_conditions}
                            onChange={childChangeHandler}
                            placeholder="ex: Asthma"
                        /> 
                    </div>
                    <div>
                        <input
                            type="text"
                            name="special_instructions"
                            value={props.newChild.special_instructions}
                            onChange={childChangeHandler}
                            placeholder="Special Instructions"
                        />
                    </div>
                    <div>
                        <input
                            type="integer"
                            name="parent_id"
                            value={props.newChild.parent_id}
                            onChange={childChangeHandler}
                            placeholder="Parent ID"
                        />
                    </div>

                    {props.edit ? (
                        <Link to = '/child-edit'><button>Edit Child</button></Link>
                    ) : (
                        <button>Add Child</button>
                    )}
                  </form>
              </div>
          )
  };

  export default ChildForm;