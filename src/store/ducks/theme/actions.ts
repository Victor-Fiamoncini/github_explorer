import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import ThemeTypes from './types';

import { ThemeState } from './state';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const changeTheme = (
	themeName: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => (
	dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
	try {
		return dispatch({
			type: ThemeTypes.CHANGE_THEME,
			payload: themeName,
		});
	} catch {
		return dispatch;
	}
};

export { changeTheme };
