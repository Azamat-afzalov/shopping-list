import React , {useEffect} from 'react';
import { ListGroup , ListGroupItem , Button} from 'reactstrap';
import {CSSTransition , TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems , deleteItem} from '../actions/itemActions.js';
import propTypes from 'prop-types';

const ShoppingList = (props) => {
    const {items} = props.item;
    const onDeleteClick = (evt) => {
        console.log(evt.target.id);
        props.deleteItem(evt.target.id);
    }
    useEffect(() => {
        props.getItems();

    },[])

    return (
        <ListGroup className="mt-3">
            <TransitionGroup className="shopping-list">
                {items.map(({_id,name}) => (
                    <CSSTransition key={_id} timeout={500} classNames="fade">
                        <ListGroupItem>
                            <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                id={_id}
                                onClick={onDeleteClick}
                            >&times;</Button>
                            {name}
                        </ListGroupItem>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ListGroup>
    )
}
ShoppingList.propTypes = {
    getItems : propTypes.func.isRequired,
    item : propTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item : state.item
})
export default connect(mapStateToProps,{getItems , deleteItem})(ShoppingList)
