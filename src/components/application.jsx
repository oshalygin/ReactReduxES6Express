import React, {PropTypes} from "react";

class Application extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p>Inserted Header...</p>
                {this.props.children}
            </div>
        );
    }
}

Application.propTypes = {
    children: PropTypes.object.isRequired
};

export default Application;