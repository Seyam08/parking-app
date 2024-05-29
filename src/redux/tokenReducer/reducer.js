import uniqid from "uniqid";
import { ADD_TOKEN, REMOVE_TOKEN } from "./actionTypes";
import { tokenState } from "./initialState";

export const tokenReducer = (state = tokenState, { type, payload }) => {
  switch (type) {
    case ADD_TOKEN:
        return [...state, 
          {
          id: uniqid(),
          ...payload}]
    case REMOVE_TOKEN:{
      const updatedToken = state.filter((token) => token.id !== payload);
      return(updatedToken);
    }
  default:
    return state
  }
}
