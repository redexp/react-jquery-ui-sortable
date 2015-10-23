import React from 'react';

var Item = React.createClass({
    render: function () {
        return (
            <li>{this.props.text}</li>
        );
    }
});

export default Item;