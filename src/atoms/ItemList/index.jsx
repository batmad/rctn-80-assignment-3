/* eslint-disable react/prop-types */
import React from "react";

class ItemList extends React.Component {
    render() {
        return (
            <li className="list-group-item">
                <i className="fas fa-code me-2"></i> {this.props.item}
            </li>
        )
    }
}

export default ItemList;