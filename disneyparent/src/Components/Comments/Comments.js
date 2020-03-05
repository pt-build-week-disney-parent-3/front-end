import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../auth/axiosWithAuth';
import {connect} from "react-redux"
import CommentForm from './CommentForm';


const Comment = (props) => {
    const [com, setCom] = useState([]);
    const [newGetCom, setNewGetCom] = useState();
    const [editCom, setEditCom] = useState(false);
    const [newCom, setNewCom] = useState({
    name: "",
    DOB: "",
    
  });

  useEffect(() => {
    setNewGetCom(false);
    axiosWithAuth()
      .get(`comments/comment/${props.user_id}`)
      .then(res => {
        console.log("GET", res.data);
        setCom(res.data);
      })
      .catch(err => console.log(err));
  }, [newGetChild]);


  return (
      <div className = 'comment'>
          <CommentForm 
            comment = {com}
            setNewGetCom = {setNewGetCom}
            setEditCom = {setEditCom}
            setNewCom = {setNewCom}
            id = {props.id}
        />
      </div>
  );
};

const mapStateToProps = (state) => {
    return ({
        user_id: state.user.id
    })
}

export default connect(mapStateToProps, {})(comment);