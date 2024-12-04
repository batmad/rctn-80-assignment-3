/* eslint-disable react/prop-types */
import React from'react';
import BlockQuote from '../../atoms/BlockQuote';
import FigCaption from '../../atoms/FigCaption';

class Quote extends React.Component {
    render() {
        return (
            <figure>
                <BlockQuote text={this.props.text} />
                <FigCaption text={this.props.author} />
            </figure>
        )
    }
}

export default Quote;