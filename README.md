# react-jquery-ui-sortable
Example of React component with jQuery UI Sortable

Main idea is in `components/SortableList.js::componentDidMount()`

```javascript
    componentDidMount: function () {
        var ul = findDOMNode(this);
        ul = $(ul);
        ul.sortable({
            stop: (e, ui) => {
                var to = ui.item.index();   // where li right now
                ul.sortable('cancel');      // revers everything as it was before dragging
                var from = ui.item.index(); // find out where li was before dragging

                this.props.onMoveItem(from, to);
            }
        });
    }
```
