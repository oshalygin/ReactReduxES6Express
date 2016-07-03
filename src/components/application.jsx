import React, {PropTypes} from "react";
import Header from "./common/header.jsx";

class Application extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                {this.props.children}
            </div>
        );
    }
}

Application.propTypes = {
    children: PropTypes.object.isRequired
};

export default Application;