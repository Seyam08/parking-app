import { CLEAR_INFO } from '../bookReducer/actionTypes';
import { addToken } from '../tokenReducer/action';

const passState = store => next => action => {
    
 if (action.type === CLEAR_INFO) {
    const bookState = store.getState().book;
    store.dispatch(addToken(bookState));
  }
  return next(action);
  
};

export default passState;