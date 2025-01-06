import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';

export interface AuthState {
  user: any;
  error: any;
}

export const initialState: AuthState = {
  user: null,
  error: null,
};

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => ({ ...state, user })),
  on(loginFailure, (state, { error }) => ({ ...state, error })),
  on(logout, state => ({ ...state, user: null }))
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
