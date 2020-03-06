import React from "react";
import {axiosWithAuth} from "../../auth/axiosWithAuth";

const ChildList = (props) => {

    console.log(props)
  
      
    const editChild= (id) => {
      axiosWithAuth()
        .put(`/children/${id}` )
        .then(res => {
          console.log("EDIT", res.data);
          props.setNewChild({
            id: "",
            name: res.data.name,
            DOB: res.data.DOB, 
            allergies: res.data.allergies,
            special_instructions: res.data.special_instructions,
            medical_conditions: res.data.medical_conditions
          });
        })
        .catch(err => console.log(err));
      props.setEditChild(true);
    };
  
    const deleteChild = (id) => {
      console.log("ID", id);
      axiosWithAuth()
        .delete(`/children/${id}`)
        .then(res => {
          console.log("ADD", res.data);
          props.setNewGetChild(true);
        })
        .catch(err => console.log(err));
    };


    return (
        <div>
            {props.child.map(item => {
                return (
                    <div className = 'childCard' key = {item.id}>
                        <div>
                            <button onClick = {() => editChild(item.id)} >
                            </button>
                            <button onClick = {() => deleteChild(item.id)} ></button>
                        </div>
                        <h3>{item.name}</h3>
                        <p>D.O.B {item.DOB}</p>
                        <p>Allergies: {item.allergies}</p>
                        <p> Medical Conditions: {item.medical_conditions}</p>
                    </div>
                )
            })}
        </div>
    );
};


export default ChildList;