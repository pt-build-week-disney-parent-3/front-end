import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import ParentsLogin from './Components/Parents/ParentsLogin';
import { reducer } from './reducers/reducers';
import VolunteerLogin from './Components/Volunteer/VolunteerLogin';
import Home from './Components/Home';
// import SearchForm from './Components/SearchForm';
import Dashboard from './Components/Parents/ParentDashboard';
import { Route } from "react-router-dom";
import ParentRegisterForm from './Components/Parents/ParentRegister';
import VolunteerRegisterForm from './Components/Volunteer/VolunteerRegister';
import VolunteerDashboard from './Components/Volunteer/VolunteerDashboard';

const store = createStore( reducer, applyMiddleware(thunk));
function App() {
  return (
    <div>
      <header>
        <Provider store = {store}>
          <Route exact path = '/' component = {Home} />
          <Route path = '/Parent-Register' component = {ParentRegisterForm} />
          <Route path = '/Volunteer-Register' component = {VolunteerRegisterForm} />
          <Route path = "/Parents-Login" component= {ParentsLogin} />
          <Route path = "/Volunteer-Login"  component = {VolunteerLogin} />
          <Route path = '/ParentDashboard' component = {Dashboard} /> 
          <Route path = '/VolunteerDashboard' component = {VolunteerDashboard} /> 
        </Provider>
      </header>
    </div>
  );
}

export default App;
