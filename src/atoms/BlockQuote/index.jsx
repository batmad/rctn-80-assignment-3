/* eslint-disable react/prop-types */
import React from "react";

class BlockQuote extends React.Component {
    render() {
        return (
            <blockquote className="blockquote">
                <p>&quot;{this.props.text}&quot;</p>
            </blockquote>
        )
    }
}

export default BlockQuote;