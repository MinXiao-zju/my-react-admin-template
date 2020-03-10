const intialStatus = {
    orders: [
        {
            id: 1,
            name: "Apple order",
            amount: 12,
            totalPrice: 100,
            product: {
                id: 2, name: "Apple", description: "This is Apple and it is healthy",
                amount: 5, price: 2, hasExpiryDate: true, category: "Fruit"
            }
        },
        {
            id: 2,
            name: "Straw order",
            amount: 7,
            totalPrice: 7,
            product: {
                id: 3, name: "Straw", description: "This is Straw and you can use it for your drink",
                amount: 100, price: 1, hasExpiryDate: false, category: "Kitchen"
            }
        }
    ]
};

const orderTypes = {
    ADD_ORDER: 'ADD_ORDER'
};

export const orderActions = {
    addOrder: (order) => ({
        type: orderTypes.ADD_ORDER,
        order: order
    })
};

const orderReducer = (state = intialStatus, action) => {
    switch (action.type) {
        case orderTypes.ADD_ORDER: {
            let maxId = Math.max.apply(Math, state.orders.map((o) => { return o.id; }));
            if (maxId === -Infinity) { maxId = 0; }
            return { ...state, orders: [...state.orders, { ...action.order, id: maxId + 1 }] };
        }
        default:
            return state;
    }
}

export default orderReducer;