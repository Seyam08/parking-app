import { SPOT_SELECT, USER_EMAIL, USER_NAME, USER_PHONE, VH_SELECT } from "./actionTypes";
import { initialState } from "./initialState";

export const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case VH_SELECT:
        return console.log(type, payload);
    case SPOT_SELECT:
        return []
    case USER_NAME:
        return []
    case USER_EMAIL:
        return []
    case USER_PHONE:
        return []
    
    default:
        return state
  }
}
