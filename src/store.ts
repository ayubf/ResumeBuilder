import {configureStore} from '@reduxjs/toolkit';
import resumeReducer from './resumeSlice';

export const resumeStore = configureStore({
    reducer: {
        resume: resumeReducer,
    }
})