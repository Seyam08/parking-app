import { SPOT_SELECT, USER_EMAIL, USER_NAME, USER_PHONE, VH_SELECT } from "./actionTypes";
import { initialState } from "./initialState";

export const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VH_SELECT:
        return {...state, vehicleType: payload}
    case SPOT_SELECT:
        return {...state, selectedSpot: payload}
    case USER_NAME:
        return {...state, userName: payload}
    case USER_EMAIL:
        return {...state, userEmail: payload}
    case USER_PHONE:
        return {...state, userPhone: payload}
    
    default:
        return state
  }
}
