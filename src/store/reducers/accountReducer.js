// import React from 'react';

const intialState = {
    email: 'xiaomin1978@zju.edu.cn'
};

const accountTypes = {
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT'
};

export const accountActions = {
    login: (email) => ({
        type: accountTypes.LOG_IN,
        email: email
    }),
    logout: () => ({
        type: accountTypes.LOG_OUT
    })

};


const accountReducer = (state = intialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default accountReducer;