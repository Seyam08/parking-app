import { CLEAR_INFO } from '../bookReducer/actionTypes';
import { addToken } from '../tokenReducer/action';

const passState = store => next => action => {
  switch (action.type) {
    case CLEAR_INFO:{
      const dispatch = store.dispatch
      const bookState = store.getState().book
      dispatch(addToken(bookState))
      break;
    }
    default:
      break;
  }
  return next(action);
};

export default passState;