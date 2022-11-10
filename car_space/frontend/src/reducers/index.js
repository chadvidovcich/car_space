import { combineReducers } from 'redux'
import vehicles from './vehicles'
import errors from './errors'
import messages from './messages'

export default combineReducers({
    vehicles,
    errors,
    messages
})