import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { notificationActions } from '../../store/reducers/notificationReducer';

const Notifications = (props) => {
    const { notifications, removeNotification } = props;

    const notificationList = notifications.map(notification => {
        return (
            <div className="toast" key={`notification_${notification.id}`}>
                <div className="toast-header">
                    <i className="fas fa-fw fa-bell"></i>
                    <strong className="mr-auto">{notification.title}</strong>
                    <small>{notification.date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}</small>
                    <button type="button"
                        className="ml-2 mb-1 close"
                        data-dismiss="toast"
                        aria-label="Close"
                        onClick={() => removeNotification(notification.id)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    {notification.text}
                </div>
            </div>
        )
    });

    return (
        <div className="toast-wrapper">
            {notificationList}
        </div>
    );
}

export default connect(
    (state) => ({
        notifications: state.notifications.notifications
    }), (dispatch, ownProps) => ({
        ...bindActionCreators(notificationActions, dispatch, ownProps)
    })
)(Notifications);