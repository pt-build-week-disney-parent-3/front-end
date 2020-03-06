import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from "react-redux"
import { fetchLoggedUser } from "../../actions/index";
import { axiosWithAuth } from '../auth/axiosWithAuth';
import {Link} from 'react-router-dom';


function ParentCard(props) {

    const [parent, setParent] = useState({});

    const getParent = e => {
        e.preventDefault();
        axiosWithAuth().get("/users/logged", parent)
        .then(res => {
            console.log(res.data)
            localStorage.setItem("token", res.data.token)
        })
        .catch(err => console.log("getParent", err))
    }

    useEffect(() => {
        props.fetchLoggedUser();
      }, [])

    return (
        <div>
            <h1> Account Details</h1>
            <h2>{props.parent.firstName}{ props.parent.lastName}</h2>

            <div>
                <h3>Username</h3>
                <div>{props.parent.username}</div>
            </div>
            <div>
                <h3>Email</h3>
                <div>{props.parent.email}</div>
            </div>
            <div>
                <h3>DOB</h3>
                <div>{props.parent.DOB}</div>
            </div>
            <div>
                <h3>Phone Number</h3>
                <div>{props.parent.PhoneNum}</div>
            </div>
            <div>
                <h3>Emergency Phone</h3>
                <div>{props.parent.emergencyPhone}</div>
            </div>
        </div>
    );
    }

    const mapStateToProps = state => {
        return {
            parent: state.user,
            isfetching: state.isfetching
        };
    };

    export default connect(mapStateToProps, {fetchLoggedUser})(ParentCard);