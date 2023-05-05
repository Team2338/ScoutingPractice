import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { IAppState } from '../../models';
import { reducer } from './Reducer';

export const store = configureStore({
	reducer: reducer
});

export type AppDispatch = typeof store.dispatch;

// Hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IAppState> = useSelector;
