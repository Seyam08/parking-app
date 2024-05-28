import { CLEAR_INFO, SET_DETAILS, SPOT_SELECT, VH_SELECT } from "./actionTypes";
import { bookState } from "./initialState";

export const bookReducer = (state = bookState, { type, payload }) => {
  switch (type) {
    case VH_SELECT:
        return {...state, vehicleType: payload}
    case SPOT_SELECT:
        return {...state, selectedSpot: payload}
    case SET_DETAILS:
        return {...state, userDetails:{...payload}}
    case CLEAR_INFO:
        return bookState
    default:
        return state
  }
}