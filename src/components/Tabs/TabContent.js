import React , {Component} from "react";

class TabContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render (){
        return(
            <React.Fragment>
                <div className="row" id={this.props.id}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
};

export default TabContent;