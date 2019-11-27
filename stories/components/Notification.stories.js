import React from "react";

// import { formatCode } from "../lib/utils";
// import SyntaxHighlighter from "../lib/SyntaxHighlighter";
import { Notification, NotificationClose , NotificationDetail,NotificationContent } from "../../src/components/Notification";
import { Page, Title } from "../shared-styles";
import { select } from '@storybook/addon-knobs';

const options = {
    Default : '',
    Primary : 'is-primary',
    Secondary : 'is-secondary',
    Success : 'is-success',
    Danger : 'is-danger',
    Info : 'is-info',
    Warning : 'is-warning',
    Dark : 'is-dark',
    Light : 'is-light'
}

const isToastOptions = {
    Default : '',
    Primary : 'is-toast-primary',
    Secondary : 'is-toast-secondary',
    Success : 'is-toast-success',
    Danger : 'is-toast-danger',
    Info : 'is-toast-info',
    Warning : 'is-toast-warning',
    Dark : 'is-toast-dark',
    Light : 'is-toast-light'
}

// const withCloseBtn ={
//     Default : '',
//     Close : 
// }

const NotificationStories = () => {
    return(
        <Page>
            <Title>
                <h3 className="has-text-white has-text-weight-semibold">Notification</h3>
            </Title>
            <div className="sgds-section">
                <div className="sgds-container">
                    <div className="row">
                        <div className="col is-6">
                            <h5 className="margin--bottom--lg">Default Notification</h5>
                            <Notification NotificationType={select('Default Notification', options, 'is-primary')}>
                                <NotificationDetail>
                                    <NotificationClose/>
                                    <NotificationContent>
                                        <p class="has-text-weight-bold">Updates</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aut dicta</p>
                                    </NotificationContent>
                                </NotificationDetail>
                            </Notification>
                        </div>
                        <div className="col is-6">
                            <h5 className="margin--bottom--lg">Toast Notification</h5>
                            <Notification NotificationType={select('Toast Notification', isToastOptions, 'is-toast-primary')}>
                                <NotificationDetail>
                                    <span class="sgds-icon sgds-icon-callout is-size-4"></span>
                                    <NotificationClose/>
                                    <NotificationContent>
                                        <p class="has-text-weight-bold">Updates</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aut dicta</p>
                                    </NotificationContent>
                                </NotificationDetail>
                            </Notification>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default NotificationStories;