import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './book/reducer';

export default configureStore({
  reducer: {
    book: bookReducer,
  },
  devTools: true
})