import React, { useEffect, Fragment } from 'react';
import { DatePicker } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { rootActions } from '../../store/reducers/rootReducer';
import TopCard from '../../common/components/TopCard';
import ProductList from '../Products/ProductList';
import OrderList from '../Orders/OrderList';

const Dashboard = (props) => {
    const { numberItemsCount, totalProductAmount, totalPrice,
        totalSales, totalOrderAmount,
        products,
        orders,
        updateCurrentPath } = props;


    useEffect(() => {
        updateCurrentPath('Dashboard', 'Home');
    });

    return (
        <Fragment>
            <h1 className="h3 mb-2 text-gray-800">Dashboard</h1>
            <p className="mb-4">Summary and overview of our admin stuff here</p>

            <div className="row">
                <TopCard title="PRODUCT COUNT" text={`${numberItemsCount}`} icon="box" class="primary" />
                <TopCard title="PRODUCT AMOUNT" text={`${totalProductAmount}`} icon="warehouse" class="danger" />
                <TopCard title="SUMMARY PRICE" text={`$${totalPrice}`} icon="dollar-sign" class="success" />
            </div>

            <div className="row">
                <TopCard title="SALES" text={totalSales.toString()} icon="donate" class="primary" />
                <TopCard title="ORDER AMOUNT" text={totalOrderAmount.toString()} icon="calculator" class="danger" />
            </div>

            <div className="row">

        <div className="col-xl-6 col-lg-6">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-green">Product list</h6>
            </div>
            <div className="card-body">
              <ProductList products={products} />
            </div>
          </div>

        </div>

        <div className="col-xl-6 col-lg-6">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-green">Order list</h6>
            </div>
            <div className="card-body">
              <OrderList orders={orders} />
            </div>
          </div>
        </div>

      </div>
        </Fragment>
    )
};


export default connect((state) => ({
    products: state.products.products,
    numberItemsCount: state.products.products.length,
    totalPrice: state.products.products.reduce((prev, next) => prev + ((next.price * next.amount) || 0), 0),
    totalProductAmount: state.products.products.reduce((prev, next) => prev + (next.amount || 0), 0),

    orders: state.orders.orders,
    totalSales: state.orders.orders.reduce((prev, next) => prev + next.totalPrice, 0),
    totalOrderAmount: state.orders.orders.reduce((prev, next) => prev + next.amount, 0)


}), (disptach) => ({
    ...bindActionCreators(rootActions, disptach)
}))(Dashboard);