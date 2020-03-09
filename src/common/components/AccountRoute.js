import React from 'react';
import { Route, Redirect } from "react-router-dom"
import Login from "../../components/Account/Login";
import { connect } from 'react-redux';

const AccountRoute = ({ children, ...rest }) => {

    // TODO: 
    // const account = {
    //     email: 'happydagui@126.com' // uncomment it to go to login page

    // };
    const { account } = rest;

    return (<Route {...rest}
        render={() => account.email ? (
            <Redirect to={{ pathname: '/admin/home' }} />
        ) : (<Login />)} />)
}

export default connect((state) => {
    return {
        account: state.account
    };
}, null)(AccountRoute);