const initialState = {
    notifications: [{ id: 1, date: new Date(), text: "Hello new user", title: "Welcome" }]
};

const notificationTypes = {
    ADD_NOTIFICATION: 'ADD_NOTIFICATION',
    REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION'
}

export const notificationActions = {
    addNotification: (title, text) => ({
        type: notificationTypes.ADD_NOTIFICATION,
        text: text,
        title: title
    }),
    removeNotification: (id) => ({
        type: notificationTypes.REMOVE_NOTIFICATION,
        id: id
    })
}

function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case notificationTypes.ADD_NOTIFICATION: {
            let maxId = Math.max.apply(Math, state.notifications.map(o => o.id));
            if (maxId === -Infinity) { maxId = 0; }
            let newItem = {
                id: maxId + 1,
                date: new Date(),
                title: action.title,
                text: action.text
            };
            return { ...state, notifications: [...state.notifications, newItem] };
        }
        case notificationTypes.REMOVE_NOTIFICATION: {
            return {
                ...state, notifications: state.notifications
                    .filter(Notification => Notification.id !== action.id)
            };
        }
        default:
            return state;
    }
}


export default notificationReducer;