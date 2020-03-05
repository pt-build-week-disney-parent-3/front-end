import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useStateValue } from '../state/State';
import { logOut } from '../Actions/index';
import Home from '../Components/Home';

const LogOut = () => {
    console.log('clicked logout')
    
    return (
        <div>

            <Link exact path to ="/">
                <h2>Home</h2>
            </Link>

            <Route exact path ="/" component = { Home }/>

        </div>
    )
}

export default LogOut;