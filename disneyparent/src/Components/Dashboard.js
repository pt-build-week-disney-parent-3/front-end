import React, {useEffect, useState} from "react";
import ParentsForm from "./ParentsLogin";
import VolunteerForm from "./VolunteerLogin";

// import {reducer} from "../reducers/reducers";
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
      {userType === "parent" && <ParentsForm />}
      {userType === "volunteer" && <VolunteerForm />}
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