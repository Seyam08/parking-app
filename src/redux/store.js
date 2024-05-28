import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './bookReducer/reducer';
import passState from './middleware/passState';
import { tokenReducer } from './tokenReducer/reducer';


export default configureStore({
  reducer: {
    book: bookReducer,
    token: tokenReducer
  },
  devTools: true,
  middleware: ()=>[passState]
})