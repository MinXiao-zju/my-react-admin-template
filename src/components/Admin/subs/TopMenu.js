import React from 'react';
import { connect } from 'react-redux';
import TopMenuAccount from './TopMenuAccount';
import "./TopMenu.css";
// import { Breadcrumb } from 'antd';

const TopMenu = ({ page }) => (<nav className="navbar navbar-expand navbar-light bg-custom-dark topbar mb-4 static-top shadow">
    <ol className="breadcrumb dark-breadcrumb">
        <li className="breadcrumb-item"><a href="# ">{page ? page.area : null}</a></li>
        <li className="breadcrumb-item"><a href="# ">{page ? page.subArea : null}</a></li>
    </ol>
    {/* 使用 antd breadcrum 需要调整字体颜色，不然看不见 */}
    {/* <Breadcrumb>
        <Breadcrumb.Item>><a href="# ">{page ? page.area : null}</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="# ">{page ? page.subArea : null}</a></Breadcrumb.Item>
    </Breadcrumb> */}

    <ul className="navbar-nav ml-auto">
        {/* <div className="topbar-divider d-none d-sm-block"></div> */}
        <TopMenuAccount />
    </ul>
</nav>);
export default connect((state) => ({
    page: state.root.page
}))(TopMenu);