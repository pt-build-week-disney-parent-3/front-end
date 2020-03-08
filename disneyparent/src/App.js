import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import ParentsLogin from './Components/ParentsLogin';
import { reducer } from './reducers/reducers';
import VolunteerLogin from './Components/VolunteerLogin';
import Home from './Components/Home';
import SearchForm from './Components/SearchForm';
import Dashboard from './Components/Dashboard';
import { Route } from "react-router-dom";
import ParentRegisterForm from './Components/ParentRegister';
import VolunteerRegisterForm from './Components/VolunteerRegister';

const store = createStore( reducer, applyMiddleware(thunk));
function App() {
  return (
    <div>
      <header>
        <Provider store = {store}>
          <Route exact path = '/' component = {Home} />
          <Route path = "/Search" component = {SearchForm} />
          <Route path = '/Parent-Register' component = {ParentRegisterForm} />
          <Route path = '/Volunteer-Register' component = {VolunteerRegisterForm} />
          <Route path = "/Parents-Login" component= {ParentsLogin} />
          <Route path = "/Volunteer-Login"  component = {VolunteerLogin} />
          <Route path = '/Dashboard' component = {Dashboard} /> 
        </Provider>
      </header>
    </div>
  );
}

export default App;
