import {configureStore} from '@reduxjs/toolkit';
import { todoSlice } from '../feature/Todo';
export const store = configureStore({
    reducer:todoSlice
});