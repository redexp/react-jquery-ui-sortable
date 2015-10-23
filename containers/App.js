import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SortableList from '../components/SortableList';
import * as actions from '../actions';

var App = React.createClass({
    render: function () {
        return (
            <SortableList list={this.props.list} onMoveItem={this.props.actions.moveItem} />
        );
    }
});

function select(state) {
    return {
        list: state.list
    };
}

function bindActions(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(select, bindActions)(App);