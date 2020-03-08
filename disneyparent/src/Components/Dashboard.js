import React, {useEffect, useState} from "react";
// import {reducer} from "../reducers/reducers";
import {connect} from "react-redux"
import {fetchLoggedUser} from "../Actions/index"
import CommentForm from '../Components/Comments/CommentForm';
import Comments from '../Components/Comments/Comments';
import ChildList from './Child/ChildList';

const Dashboard = (props)=> {
  
  return (
    <div>
    <h1>Welcome to your dashboard</h1>
    <CommentForm />
    <ChildList />

    </div>
  )

}

const mapStateToProps = state => {
  return {
    userType: state.user.type,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, {fetchLoggedUser})(Dashboard);