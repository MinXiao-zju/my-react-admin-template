import React from 'react';
import { Route } from "react-router-dom";
import Login from "../../components/Account/Login";
import { connect } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
    // TODO:
    const { account } = rest;
    return (<Route
        {...rest}
        render={() =>
            account.email ? (children) : <Login />} />);
};


export default connect((state) => {
    return {
        account: state.account
    };
}, null)(PrivateRoute);