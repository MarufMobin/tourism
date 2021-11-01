import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    // const {children, ...rest} = props;
    const { user } = useAuth();
    console.log(user)
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email  || user?.name ?
                children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;