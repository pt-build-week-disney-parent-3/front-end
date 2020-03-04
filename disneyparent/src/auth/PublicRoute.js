import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
            alert("You need to Log out first!")
            return <Redirect to="/dashboard" />;
        } else {
            return <Component />;
        }
      }}
    />
  );
};

export default PublicRoute;