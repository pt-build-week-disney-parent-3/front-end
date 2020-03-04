import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import ParentsForm from './Components/ParentsForm';
import { reducer } from './reducers/reducers';
import VolunteerForm from './Components/VolunteerForm';
import Home from './Components/Home';
import SearchForm from './Components/SearchForm';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './auth/PrivateRoute';
import PublicRoute from './auth/PublicRoute';
import { Route } from "react-router-dom";
import ParentRegisterForm from './Components/ParentRegister';
import VolunteerRegisterForm from './Components/VolunteerRegister';

const store = createStore( reducer, applyMiddleware(thunk));
function App() {
  return (
    <div>
      <Provider store = {store}>
      <PublicRoute exact path = '/' component = {Home} />
      <PublicRoute path = "/Search"  render={(routeParams)=>{return <SearchForm {...routeParams}  />}}/>
      <PublicRoute path = '/Parent-Register' component = {ParentRegisterForm} />
      <PublicRoute path = '/Volunteer-Register' component = {VolunteerRegisterForm} />
      <PublicRoute path = "/Parents"  render={(routeParams)=>{return <ParentsForm {...routeParams}  />}}/>
      <PublicRoute path = "/Volunteer"  render={(routeParams)=>{return <VolunteerForm {...routeParams}  />}}/>
      <PrivateRoute path = '/Dashboard' component = {Dashboard} /> 
      </Provider>
    </div>
  );
}

export default App;
