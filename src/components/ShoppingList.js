import React, {Component} from 'react'
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item;
        const itemList = items.map(({_id, name}) => {
            return (
                <CSSTransition timeout={500} classNames="fade" key={_id}>
                    <ListGroupItem>
                        <Button
                            className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={this.onDeleteClick.bind(this, _id)}
                        >
                        &times;
                        </Button>
                        {name}
                    </ListGroupItem>
                </CSSTransition>
            );
        });

        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {itemList}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        item: state.item
    }
}

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);