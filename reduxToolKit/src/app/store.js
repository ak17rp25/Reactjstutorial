import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../feature/Todo';
export const store = configureStore({
    reducer:todoReducer
});