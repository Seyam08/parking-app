import uniqid from "uniqid";
import { ADD_TOKEN, REMOVE_TOKEN } from "./actionTypes";
import { tokenState } from "./initialState";

export const tokenReducer = (state = tokenState, { type, payload }) => {
  switch (type) {
    case ADD_TOKEN:{
      const token = [...state, 
          {
          id: uniqid(),
          ...payload}]
          localStorage.setItem("token", JSON.stringify(token))
          return token
    }
    case REMOVE_TOKEN:{
      const updatedToken = state.filter((token) => token.id !== payload);
      localStorage.setItem("token", JSON.stringify(updatedToken))
      return updatedToken;
    }
  default:
    return state
  }
}
