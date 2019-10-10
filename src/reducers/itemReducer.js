import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
    items: [],
    loading: false
}

export default (state = initialState, action) => {
    if(action.type === GET_ITEMS) {
        return {
            ...state,
            items: action.payload,
            loading: false
        };
    } else if (action.type === ADD_ITEM) {
        return {
            ...state,
            items: [action.payload, ...state.items]
        }
    } else if (action.type === DELETE_ITEM ) {
        return {
            ...state,
            items: state.items.filter(item => item._id !== action.payload)
        }
    } else if (action.type === ITEMS_LOADING) {
        return {
            ...state,
            loading: true
        }
    } else {
        return state;
    }
}