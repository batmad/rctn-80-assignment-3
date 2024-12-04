/* eslint-disable react/prop-types */
import React from "react";

class FigCaption extends React.Component {
    render() {
        return (
            <figcaption className="blockquote-footer">
                {this.props.text}
            </figcaption>
        )
    }
}

export default FigCaption;