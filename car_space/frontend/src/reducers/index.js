import { combineReducers } from 'redux'
import vehicles from './vehicles'
import errors from './errors'

export default combineReducers({
    vehicles,
    errors
})