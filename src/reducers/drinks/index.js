import * as defaultState from './defaultState'
import * as types from './actionTypes';


export function drinksHasErrored(state = defaultState.drinksHasErrored, action) {
    switch (action.type) {
        case types.DRINKS_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}
export function drinksIsLoading(state = defaultState.drinksIsLoading, action) {
    switch (action.type) {
        case types.DRINKS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}
export function drinks(state = defaultState.drinks, action) {
    switch (action.type) {
        case types.DRINKS_FETCH_SUCCESS:
            return action.drinks;
        default:
            return state;
    }
}

