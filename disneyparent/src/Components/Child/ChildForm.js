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
              axiosWithAuth().post("/children/create/", {
                  name: props.newChild.name,
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
                            name="name"
                            value={props.newChild.name}
                            onChange={childChangeHandler}
                            placeholder="Name"
                        /> 
                    </div>
                    <div>
                        <input
                            type="text"
                            name="DOB"
                            value={props.newChild.DOB}
                            onChange={childChangeHandler}
                            placeholder="Date of birth"
                        /> 
                    </div>
                    <div>
                        <input
                            type="text"
                            name="Allergies"
                            value={props.newChild.Allergies}
                            onChange={childChangeHandler}
                            placeholder="Allergies"
                        /> 
                    </div>
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={props.newChild.name}
                            onChange={childChangeHandler}
                            placeholder="Name"
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
                            type="text"
                            name="medical_conditions"
                            value={props.newChild.medical_conditions}
                            onChange={childChangeHandler}
                            placeholder="Medical Conditions"
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