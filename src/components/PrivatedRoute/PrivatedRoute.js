import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { LoginContext } from '../../App';

const PrivatedRoute = ({children, ...rest}) => {
    const [logInUser] = useContext(LoginContext);
    
    return (
        <Route
      {...rest}
      render={({ location }) =>
        logInUser.loginEmail ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivatedRoute;