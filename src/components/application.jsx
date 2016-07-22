import React, {PropTypes} from "react";
import { connect } from "react-redux";
import Header from "./common/header.jsx";

class Application extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading} />
                {this.props.children}
            </div>
        );
    }
}

Application.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        loading: state.numberOfXHRCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(Application);