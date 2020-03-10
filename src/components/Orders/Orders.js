import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { orderActions } from '../../store/reducers/orderReducer';
import { rootActions } from '../../store/reducers/rootReducer';
import TopCard from '../../common/components/TopCard';
import OrderList from './OrderList';
import OrderForm from './OrderForm';
import ProductList from '../Products/ProductList';

// TODO : 不要忘记 { property1, property2} 中的 大括号
const Orders = ({ orders, totalSales, totalAmount, updateCurrentPath, products }) => {

    const selectProduct = (product) => {
        // changeSelectedProduct(product)
    };

    useEffect(() => {
        updateCurrentPath('Orders', 'List');
        // clearSelectedProduct();
    });

    return <Fragment>
        <h1 className="h3 mb-2 text-gray-800">Order</h1>
        <p className="mb-4">Orders here</p>

        <div className="row">
            <TopCard title="TOTAL SALES" text={totalSales.toString()} icon="donate" class="primary" />
            <TopCard title="TOTAL AMOUNT" text={totalAmount.toString()} icon="calculator" class="danger" />
        </div>

        <div className="row">
            <div className="col-xl-12 col-lg-12">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-green">Order List</h6>
                        <div className="header-buttons">
                        </div>
                    </div>
                    <div className="card-body">
                        <OrderList orders={orders} />
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <OrderForm />
            </div>
            <div className="col-md-6">
                <div className="card card-bottom-list shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-green">Product list</h6>
                    </div>
                    <ProductList products={products} />
                </div>
            </div>
        </div>
    </Fragment>;
};

export default connect((state) => ({
    orders: state.orders.orders,
    totalSales: state.orders.orders.reduce((prev, next) => prev + next.totalPrice, 0),
    totalAmount: state.orders.orders.reduce((prev, next) => prev + next.amount, 0),
    products: state.products.products
}), (dispatch) => ({
    ...bindActionCreators(orderActions, dispatch),
    ...bindActionCreators(rootActions, dispatch)
}))(Orders);