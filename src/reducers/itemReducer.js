import uuid from 'uuid';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        {id: uuid(), name: 'Eggs'},
        {id: uuid(), name: 'Milk'},
        {id: uuid(), name: 'Steak'},
        {id: uuid(), name: 'Water'},
    ]
}

export default (state = initialState, action) => {
    if(action.type === GET_ITEMS) {
        return {
            ...state
        };
    } else if (action.type === ADD_ITEM) {
        return {
            ...state,
            items: [action.payload, ...state.items]
        }
    } else if (action.type === DELETE_ITEM ) {
        return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload)
        }
    } else {
        return state;
    }
}