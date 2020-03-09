import React from "react";
// import {reducer} from "../reducers/reducers";
import {connect} from "react-redux"
import {fetchLoggedUser} from "../../Actions/index"
import CommentForm from '../Comments/CommentForm';
// import Comments from './Comments/Comments';
// import ChildList from './Child/ChildList';
import UserNavbar from '../Navigation/userNav';
import SearchForm from '../SearchForm';
import styled from 'styled-components';


const Title = styled.h1`
text-align: center;
color: 
`
const Dashboard = (props)=> {
  
  return (
    <div>
      <UserNavbar />
      <SearchForm />
      <Title>Welcome to your dashboard!</Title>
      
      <CommentForm />
      {/* <ChildList /> */}

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