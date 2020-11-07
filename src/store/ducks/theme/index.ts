import initialState from './state';
import PostTypes from './types';

export default (state = initialState, { payload, type }): any => {
	switch (type) {
		case PostTypes.LOADING:
			return {
				...state,
				loading: true,
			};

		default:
			return state;
	}
};
