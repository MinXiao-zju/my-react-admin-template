import React, { Component } from 'react';
import { Switch, Route } from "react-router";
import ProductsConnector from '../Products/ProductsConnector';
import Home from '../Home/Home';
import TopMenu from './subs/TopMenu';
import LeftMenu from './subs/LeftMenu';

class Admin extends Component {

    render() {
        return <React.Fragment>
            {/* <Notifications />*/}
            <LeftMenu />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopMenu />
                    <div className="container-fluid">
                        <Switch>
                            {/* <Route path={`/users`}><Users /></Route> */}
                            <Route path={`/products`}><ProductsConnector /></Route>
                            {/* <Route path={`/orders`}><Orders /></Route> */}
                            <Route path="/"><Home /></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </React.Fragment>;
    }
}

export default Admin;