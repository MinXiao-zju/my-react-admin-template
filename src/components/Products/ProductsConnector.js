import React, { useEffect } from 'react';
import ProductList from './ProductList';
import './Products.css';
import { connect } from 'react-redux';
import { rootActions } from '../../store/reducers/rootReducer';
import { bindActionCreators } from 'redux';

const ProductsConnector = ({ updateCurrentPath }) => {

    const onProductSelect = () => {

    }

    // TODO: 使用 react hook/useEffect 使函数组件可以产生类型类组件 componentDidMount 的功能 
    useEffect(() => {
        updateCurrentPath('products', 'list');
    });

    return <div className="card-body">
        <ProductList
            onSelect={onProductSelect}
        />
    </div>;
}

export default connect(null, (dispatch, props) => ({
    ...bindActionCreators(rootActions, dispatch)
}))(ProductsConnector);