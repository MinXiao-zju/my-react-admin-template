import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../../store/reducers/userReducer';
import { rootActions } from '../../store/reducers/rootReducer';
import TopCard from '../../common/components/TopCard';

function Users(props) {
    const {admins, users, addAdmin, removeAdmin,updateCurrentPath} = props;

    const adminElements = props.admins.map((admin) => (
        <tr className={`table-row`}
            key={`user_${admin.id}`}>
            <th scope="row">{admin.id}</th>
            <td>{admin.firstName}</td>
            <td>{admin.lastName}</td>
            <td>{admin.email}</td>
            <td><button className="btn btn-danger" onClick={() => removeAdmin(admin)}>Revert admin</button> </td>
        </tr>
    ));

    const userElements = props.users.map((user) => (
        <tr className={`table-row`}
            key={`user_${user.id}`}>
            <th scope="row">{user.id}</th>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td><button className="btn btn-success" onClick={() => addAdmin(user)}>Set admin</button> </td>
        </tr>
    ));

    /**
     * TODO: 不能在这里去更新状态，也就是说不能在 render 函数中去更新该状态 
     * Warning: Cannot update a component from inside the function body of a different component.
     */
    // updateCurrentPath('user', 'list');

    // TODO: 必须使用 useEffect 去更新状态
    useEffect(() => {
        updateCurrentPath('user', 'list');
    });

    return <Fragment>
        <h1 className="h3 mb-2 text-gray-800">Users</h1>
        <p className="mb-4">Users here</p>

        <div className="row">
            <TopCard title="ADMINS" text={admins.length.toString()} icon="user-tie" class="primary" />
            <TopCard title="USER" text={users.length.toString()} icon="user" class="danger" />
        </div>

        <div className="row">
            <div className="col-xl-12 col-lg-12">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-green">Admin List</h6>
                        <div className="header-buttons">
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive portlet">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First name</th>
                                        <th scope="col">Last name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Admin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {adminElements}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-xl-12 col-lg-12">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-green">User List</h6>
                        <div className="header-buttons">
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive portlet">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First name</th>
                                        <th scope="col">Last name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Admin</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userElements}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment >;
}

export default connect((state) => ({
    users: state.users.users,
    admins: state.users.admins
}), (dispatch) => ({
    ...bindActionCreators(userActions, dispatch),
    ...bindActionCreators(rootActions, dispatch)
}))(Users);