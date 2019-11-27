import React from 'react';

export const TabContainer = props =>{
    return(
        <div className="sgds-tabs">
            <ul className="no-margins" role="tablist">
                {this.props.children}
            </ul>
        </div>      
    )
}

export const TabSelector = props => {
    const isSelected = props.isActive || false;
    return(
       
            <li className={isSelected ? "is-active" : null}>
                <a role="tab" data-tab={this.props.id} aria-selected={isSelected ? "true" : "false"}>{this.props.children}</a>
            </li>
       
    );
}