import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from '../Auth';

const AuthPrevented = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        Auth.isUserAuthenticated() === false
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/dashboard/crm',
                state: {from: props.location}
            }} />
    )} />
);

export default AuthPrevented;
