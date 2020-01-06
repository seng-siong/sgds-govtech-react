import React from 'react';
import PropTypes from 'prop-types';

export const Notification = ({children, colorType}) =>{
    return(
        <div className={`sgds-notification ${colorType}`}>
            {children}
        </div>
    )
}

export const NotificationClose = () => {
    return(
        <span className="delete" id="cancel-notification"></span>
    )
}

export const NotificationDetail= ({children}) => {
    return(
        <div className="sgds-notification-detail">{children}</div>
    )
}

export const NotificationContent= ({children}) => {
    return(
        <div className="sgds-notification-content">{children}</div>
    )
}

Notification.propType = {
    colorType: PropTypes.string,
}

Notification.defaultProps = {
    colorType: ''
}