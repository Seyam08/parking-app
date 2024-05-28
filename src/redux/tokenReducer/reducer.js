import { ADD_TOKEN } from "./actionTypes"
import { tokenState } from "./initialState"

export const tokenReducer = (state = tokenState, { type, payload }) => {
  switch (type) {
    case ADD_TOKEN:
        return [...state, {...payload}]
  default:
    return state
  }
}
