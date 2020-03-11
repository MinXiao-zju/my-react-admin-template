import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { accountActions } from '../../../store/reducers/accountReducer';
import logo192 from '../../../assets/logo192.png';

function TopMenuAccount(props) {
    const [isShow, setShow] = useState(false);
    const { email, logout } = props;
    return (
        <li className="nav-item dropdown no-arrow">
            <a className="nav-link dropdown-toggle"
                onClick={() => {
                    setShow(!isShow);
                }}
                href="# "
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                <span className="mr-2 d-none d-lg-inline small cadet">{email}</span>
                <img className="img-profile rounded-circle" alt=""
                    src={logo192} />
            </a>

            <div className={`dropdown-menu dropdown-menu-right shadow animated--grow-in ${(isShow) ? "show" : ""}`}
                aria-labelledby="userDropdown">
                <a className="dropdown-item"
                    onClick={() => logout()}
                    href="# "
                    data-toggle="modal"
                    data-target="#logoutModal">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
          Logout
        </a>
            </div>
        </li>
    );
}
export default connect((state) => ({
    email: state.account.email
}), (dispatch) => ({
    ...bindActionCreators(accountActions, dispatch)
}))(TopMenuAccount);