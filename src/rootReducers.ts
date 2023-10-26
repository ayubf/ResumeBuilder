import { combineReducers } from '@reduxjs/toolkit';
import resumeReducer from './resumeSlice'; // Replace with the actual file path

const rootReducer = combineReducers({
  resume: resumeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;