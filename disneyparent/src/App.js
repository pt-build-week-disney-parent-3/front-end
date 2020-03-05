import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import ParentsForm from './Components/ParentsLogin';
import { reducer } from './reducers/reducers';
import VolunteerForm from './Components/VolunteerLogin';
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
      <Route exact path = '/' component = {Home} />
      <Route path = "/Search"  render={(routeParams)=>{return <SearchForm {...routeParams}  />}}/>
      <Route path = '/Parent-Register' component = {ParentRegisterForm} />
      <Route path = '/Volunteer-Register' component = {VolunteerRegisterForm} />
      <Route path = "/Parents"  render={(routeParams)=>{return <ParentsForm {...routeParams}  />}}/>
      <Route path = "/Volunteer"  render={(routeParams)=>{return <VolunteerForm {...routeParams}  />}}/>
      <Route path = '/Dashboard' component = {Dashboard} /> 
      </Provider>
    </div>
  );
}

export default App;
