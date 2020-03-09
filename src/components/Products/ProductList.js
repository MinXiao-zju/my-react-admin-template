import React from 'react';
const ProductList = ({ products }) => {
    const theProducts = products || [];
    return <div className="table-responsive portlet">
        <h2>Prodct List</h2>
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    theProducts.map(product => {
                        return <tr key={`product_${product.id}`}>
                            <th scope="row">{product.id}</th>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.amount}</td>
                            <td>{product.price}</td>
                        </tr>;
                    })
                }
            </tbody>
        </table>
    </div>;
}

export default ProductList;