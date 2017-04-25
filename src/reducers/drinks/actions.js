import * as types from './actionTypes';

export function drinksHasErrored(boolean) {
    return {
        type: types.DRINKS_HAS_ERRORED,
        hasErrored: boolean
    }
}

export function drinksIsLoading (boolean) {
  return {
    type: types.DRINKS_IS_LOADING,
    isLoading: boolean
  }
}

export function drinksFetchSuccess (drinks) {
  return {
    type: types.DRINKS_FETCH_SUCCESS,
    drinks
  }
}

export function drinksFetchData(e, url = "http://localhost:3000/drinks") {

  return (dispatch) => {
    dispatch(drinksIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(drinksIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((json) => dispatch(drinksFetchSuccess(json.drinks)))
      .catch(() => dispatch(drinksHasErrored(true)));
  };
}
