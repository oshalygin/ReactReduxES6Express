import React from "react";
import {Link} from "react-router";

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h3>Administration Portal</h3>
                <p>React and Redux in ES6</p>
                <Link to="about" className="btn btn-primary btn-sm">Learn more </Link>
            </div>
        );
    }
}

export default HomePage;