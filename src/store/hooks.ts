import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { ProjectActions, RootState } from './store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, ProjectActions>
>
