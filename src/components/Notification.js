import React from 'react';
import PropTypes from 'prop-types';

export const Notification = props =>{
    return(
        <div class={`sgds-notification ${props.NotificationType}`}>
            {props.children}
        </div>
    )
}

export const NotificationClose = () => {
    return(
        <span class="delete" id="cancel-notification"></span>
    )
}

export const NotificationDetail= props => {
    return(
        <div class="sgds-notification-detail">{props.children}</div>
    )
}

export const NotificationContent= props => {
    return(
        <div class="sgds-notification-content">{props.children}</div>
    )
}

Notification.propType = {
    NotificationType: PropTypes.string
}
  
Notification.defaultProps = {
    NotificationType: ''
}