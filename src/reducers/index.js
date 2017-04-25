import { combineReducers } from 'redux'
import { drinks, drinksHasErrored, drinksIsLoading } from './drinks';

export default combineReducers({
  drinks,
  drinksHasErrored,
  drinksIsLoading
})
