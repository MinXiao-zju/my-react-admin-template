import React, { useEffect, Fragment, useState } from 'react';
import ProductList from './ProductList';
import './Products.css';
import { connect } from 'react-redux';
import { rootActions } from '../../store/reducers/rootReducer';
import { bindActionCreators } from 'redux';
import Popup from 'reactjs-popup';
import TopCard from '../../common/components/TopCard';

/**
 * Product Dashboard
 * @author
 */
const ProductsConnector = ({ updateCurrentPath, ...rest }) => {
    const { products, numberItemsCount, totalAmount, totalPrice } = rest;

    // TODO: react hook
    const [popup, setPopup] = useState(false);

    const onProductSelect = (product) => {
        // dispatch(changeSelectedProduct(product));
        // dispatch(setModificationState(ProductModificationStatus.None));
    }

    const onProductRemove = () => {

    }

    // TODO: 使用 react hook/useEffect 使函数组件可以产生类型类组件 componentDidMount 的功能 
    useEffect(() => {
        updateCurrentPath('products', 'list');
    });

    return <Fragment>
        <h1 className="h3 mb-2 text-gray-800">Products</h1>
        <p className="mb-4">Products here</p>
        <div className="row">
            <TopCard title="PRODUCT COUNT" text={`${numberItemsCount}`} icon="box" cls="primary" />
            <TopCard title="PRODUCT AMOUNT" text={`${totalAmount}`} icon="warehouse" cls="danger" />
            <TopCard title="SUMMARY PRICE" text={`${totalPrice}`} icon="dollar-sign" cls="success" />
        </div>

        {/* buttons */}
        <div className="row">
            <div className="col-xl-12 col-lg-12">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-green">Product List</h6>
                        <div className="header-buttons">
                            <button className="btn btn-success btn-green" >
                                <i className="fas fa fa-plus"></i>
                            </button>
                            <button className="btn btn-success btn-blue" >
                                <i className="fas fa fa-pen"></i>
                            </button>
                            <button className="btn btn-success btn-red" onClick={() => onProductRemove()} >
                                <i className="fas fa fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        <ProductList products={products.products}
                            onSelect={onProductSelect}
                        />
                    </div>
                </div>
            </div>
            {/* {((products.modificationState === ProductModificationStatus.Create)
                || (products.modificationState === ProductModificationStatus.Edit && products.selectedProduct)) ?
                <ProductForm /> : null} */}
        </div>

        <Popup className="popup-modal" open={popup}
            onClose={() => setPopup(false)} closeOnDocumentClick>
            <div className="popup-modal">
                <div className="popup-title">
                    Are you sure?
            </div>
                <div className="popup-content">
                    <button type="button"
                        className="btn btn-danger"
                        onClick={() => {
                            if (!products.selectedProduct) {
                                return;
                            }
                            // dispatch(addNotification("Product removed", `Product ${products.selectedProduct.name} was removed`));
                            // dispatch(removeProduct(products.selectedProduct.id));
                            // dispatch(clearSelectedProduct());
                            setPopup(false);
                        }}>Remove
              </button>
                </div>
            </div>
        </Popup>
    </Fragment>;
}

export default connect((state) => ({
    numberItemsCount: state.products.products.length,
    totalPrice: state.products.products.reduce((prev, next) => prev + ((next.price * next.amount) || 0), 0),
    totalAmount: state.products.products.reduce((prev, next) => prev + (next.amount || 0), 0),
    products: state.products

}), (dispatch, props) => ({
    ...bindActionCreators(rootActions, dispatch)
}))(ProductsConnector);