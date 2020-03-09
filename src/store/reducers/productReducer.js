const intialState = {};

const productTypes = {
    ADD_PRODUCT: 'ADD_PRODUCT',
    EDIT_PRODUCT: 'EDIT_PRODUCT',
    REMOVE_PRODUCT: 'REMOVE_PRODUCT',
    CHANGE_PRODUCT_AMOUNT: 'CHANGE_PRODUCT_AMOUNT',
    CHANGE_PRODUCT_PENDING_EDIT: 'CHANGE_PRODUCT_PENDING_EDIT',
    CLEAR_PRODUCT_PENDING_EDIT: 'CLEAR_PRODUCT_PENDING_EDIT',
    SET_MODIFICATION_STATE: 'SET_MODIFICATION_STATE'
};

export const productActions = {
    addProduct: (product) => ({
        type: productTypes.ADD_PRODUCT,
        product: product
    }),
    editProduct: (product) => ({
        type: productTypes.EDIT_PRODUCT,
        product: product
    })

};

const productReducer = (state=intialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
export default productReducer;
