import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {axiosWithAuth} from "../../utils/axiosWithAuth";
import {Link} from 'react-router-dom';
import {connect} from "react-redux"
import { fetchLoggedUser } from "../../actions/index";

function VolunteerCard(props) {

    const [volunteer, setVolunteer] = useState({});

    const getVolunteer = e => {
        e.preventDefault();
        axiosWithAuth().get("/users/logged", volunteer)
        .then(res => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
        })
        .catch(err => console.log("getVolunteer", err))
    }

    const VolunteerTitle = styled.div`
    
    `;

    const VolunteerData = styled.div`
        
    `;

    const VolunteerHeading = styled.div`
        
    `;

    const VolunteerSection = styled.div`
       
    `;

    const Data = styled.span`
        
    `;

    const VolunteerSubHeading = styled.div`
        
    `;

    useEffect(() => {
        props.fetchLoggedUser();
      }, []);

    return (
        <VolunteerData>
            <VolunteerTitle>
              <h2>Account Details</h2>
            </VolunteerTitle>
            <VolunteerHeading>
              <h2>{props.volunteer.firstName} {props.volunteer.lastName}</h2> <span><Link to="/volunteer-edit"><button>edit</button></Link></span>
            </VolunteerHeading>
            <VolunteerSection>
                <VolunteerSubHeading>Username</VolunteerSubHeading>
                <Data>{props.volunteer.username}</Data>
            </VolunteerSection>
            <VolunteerSection>
                <VolunteerSubHeading>Email</VolunteerSubHeading>
                <Data>{props.volunteer.email}</Data>
            </VolunteerSection>
            <VolunteerSection>
                <VolunteerSubHeading>DOB</VolunteerSubHeading>
                <Data>{props.volunteer.DOB}</Data>
            </VolunteerSection>
            <VolunteerSection>
                <VolunteerSubHeading>Phone Number</VolunteerSubHeading>
                <Data>{props.volunteer.phoneNum}</Data>
            </VolunteerSection>
            <VolunteerSection>
                <VolunteerSubHeading>Average Cost</VolunteerSubHeading>
                <Data>{props.volunteer.avgPerChild}</Data>
            </VolunteerSection>
        </VolunteerData>
    );
}
const mapStateToProps = state => {
    return {
      volunteer: state.user,
      isfetching: state.isfetching
    };
  };
  
  export default connect(mapStateToProps, {fetchLoggedUser})(VolunteerCard)