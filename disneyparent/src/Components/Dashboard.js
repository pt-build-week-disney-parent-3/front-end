import React, {useEffect, useState} from "react";
import Parent from "../Components/ParentsForm";
import Volunteer from "../Components/VolunteerForm";
// import {reducer} from "../../reducers/reducers";
import {connect} from "react-redux"
import {fetchLoggedUser} from "../Actions/index"

const Dashboard = (props) => {
  
  const [userType, setUserType] = useState(props.userType)
  
  useEffect(() => {
    props.fetchLoggedUser();
    console.log(props.userType);
    setUserType(props.userType);
  }, [props.userType]);

  return (
    <div>
      <div name={userType}  />
      {userType === "parent" && <Parent />}
      {userType === "volunteer" && <Volunteer />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userType: state.user.type,
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, {fetchLoggedUser})(Dashboard);