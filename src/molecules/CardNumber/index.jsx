/* eslint-disable react/prop-types */
import React from "react";

class CardNumber extends React.Component {
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-start border-0">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{this.props.title}</div>
                    <p>
                        {this.props.description}
                    </p>
                </div>
            </li>
        )
    }
}

export default CardNumber;