import { useReducer } from 'react';
import { createInitialState, millionaireReducer } from '../store/reducer';

export default function useMillionaireGameReducer() {
  return useReducer(millionaireReducer, null, () => createInitialState());
}
