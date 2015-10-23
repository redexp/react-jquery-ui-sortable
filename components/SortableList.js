import React from 'react';
import {findDOMNode} from 'react-dom';
import $ from 'jquery';
import Item from './Item';

require('jquery-ui/sortable');

var SortableList = React.createClass({
    render: function () {
        return (
            <ul>
                {this.props.list.map((item) => {
                    return <Item key={item.id} {...item} />;
                })}
            </ul>
        );
    },

    componentDidMount: function () {
        var ul = findDOMNode(this);
        ul = $(ul);
        ul.sortable({
            stop: (e, ui) => {
                var to = ui.item.index();
                ul.sortable('cancel');
                var from = ui.item.index();

                this.props.onMoveItem(from, to);
            }
        });
    }
});

export default SortableList;