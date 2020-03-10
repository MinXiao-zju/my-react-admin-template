const intialState = {
    selectedProduct: null,
    products: [{
        id: 1, name: "Chocolate", description: "This is Chocolate and it is Sweet",
        amount: 10, price: 4, hasExpiryDate: true, category: "Sweet"
    },
    {
        id: 2, name: "Apple", description: "This is Apple and it is healthy",
        amount: 5, price: 2, hasExpiryDate: true, category: "Fruit"
    },
    {
        id: 3, name: "Straw", description: "This is Straw and you can use it for your drink",
        amount: 100, price: 1, hasExpiryDate: false, category: "Kitchen"
    },
    {
        id: 4, name: "Spoon", description: "This is Spoon and it is useful while eating",
        amount: 3, price: 2, hasExpiryDate: false, category: "Kitchen"
    },
    {
        id: 5, name: "Sugar", description: "This is Sugar and it is to make your life sweet",
        amount: 15, price: 5, hasExpiryDate: true, category: "Sweet"
    }]
};

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
