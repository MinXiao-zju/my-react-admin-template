// import React from 'react';

const intialState = {
    users: [
        { id: 1, firstName: "John", lastName: "Smith", email: "jsmith@em.pl", },
        { id: 2, firstName: "Jannice", lastName: "Bing", email: "ohmy@fr.pl" }
    ],
    admins: [
        { id: 3, firstName: "Jannet", lastName: "Crock", email: "jcrock@em.pl" },
    ]
};

export const userTypes = {
    ADD_ADMIN: "ADD_ADMIN",
    REMOVE_ADMIN: 'REMOVE_ADMIN'
};

export const userActions = {
    addAdmin: (user) => ({
        type: userTypes.ADD_ADMIN,
        user: user
    }),
    removeAdmin: (user) => ({
        type: userTypes.REMOVE_ADMIN,
        user: user
    })
};

const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case userTypes.ADD_ADMIN: { //TODO :这里写成 userActions.ADD_ADMIN 导致错误的判断逻辑，:)
            return { ...state, users: state.users.filter(x => x.id !== action.user.id), admins: [...state.admins, action.user] };
        }
        case userTypes.REMOVE_ADMIN: {
            return { ...state, admins: state.admins.filter(x => x.id !== action.user.id), users: [...state.users, action.user] };
        }
        default:
            console.log('do nothing');
            return state;
    }
}

export default userReducer;