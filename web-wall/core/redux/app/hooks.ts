import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
// this is a function but we alias it to add types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;