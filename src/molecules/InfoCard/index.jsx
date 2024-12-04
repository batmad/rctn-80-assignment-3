/* eslint-disable react/prop-types */
import React from'react';

class InfoCard extends React.Component {
    render() {
        return (
            <div className="list-group-item list-group-item-action border-0" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{this.props.title}</h5>
                    <small>{this.props.period}</small>
                </div>
                <p className="mb-1">{this.props.description}</p>
                <small>{this.props.address}</small>
            </div>
        )
    }
}

export default InfoCard;