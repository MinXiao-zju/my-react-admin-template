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
    ADD_ADMIN : "ADD_ADMIN",
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
        default:
            return state;
    }
}

export default userReducer;