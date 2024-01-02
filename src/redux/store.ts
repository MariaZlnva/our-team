import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import teamSlice from './teamSlice';

 const store = configureStore({
  reducer: {
    team: teamSlice,

  },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store;

