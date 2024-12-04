/* eslint-disable react/prop-types */
import React from "react";

class Paragraph extends React.Component {
    render() {
        return (
            <p className="card-text">
                {this.props.children}
            </p>
        )
    }
}

export default Paragraph;