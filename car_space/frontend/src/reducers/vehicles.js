import { GET_VEHICLES, ADD_VEHICLE, DELETE_VEHICLE } from '../actions/types.js'

const initialState = {
    vehicles: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload
            }
        case ADD_VEHICLE:
            return {
                ...state,
                vehicles: [...state.vehicles, action.payload]
            }
        case DELETE_VEHICLE:
            return {
                ...state,
                vehicles: state.vehicles.filter(vehicle => vehicle.id !== action.payload)
            }
        default:
            return state
    }
}