import {combineReducers} from 'redux';
import {MOVE_ITEM} from './actions';
import _ from 'lodash';

function list(list, action) {
    if (!list) {
        list = [];

        for (var i = 1; i <= 10; i++) {
            list.push({
                id: i,
                text: 'item ' + i
            });
        }
    }

    switch (action.type) {
        case MOVE_ITEM:
            var {from, to} = action;
            if (from === to) return list;

            var item = list[from];
            list = _.clone(list);
            list.splice(from, 1);
            list.splice(to, 0, item);
            return list;

        default:
            return list;
    }
}



export default combineReducers({
    list
});