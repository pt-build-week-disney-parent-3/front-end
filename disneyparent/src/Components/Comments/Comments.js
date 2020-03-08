import React, { useState, useEffect } from "react";
import axios from 'axios';
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
    axios
      .get(`https://disney-parent-3.herokuapp.com/api/comments/comment/${props.user_id}`)
      .then(res => {
        console.log("GET", res.data);
        setCom(res.data);
      })
      .catch(err => console.log(err));
  }, [newGetCom]);


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

export default connect(mapStateToProps, {})(Comment);