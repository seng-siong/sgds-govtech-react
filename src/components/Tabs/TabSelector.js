import React , {Component} from "react";

class TabSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render (){
        return(
            <React.Fragment>
                <div className="sgds-tabs">
                    <ul className="no-margin" role="tablist">
                        {this.props.children}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
};

export default TabSelector;