import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ThemeState } from './theme/state';

export type ThunkResult<R> = ThunkAction<R, ThemeState, undefined, AnyAction>;
