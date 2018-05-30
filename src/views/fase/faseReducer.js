import { FASE_SEARCH } from './faseActions'

const initialState = { fases: [] }

export default function (state = initialState, action) {
	switch (action.type) {
		case USER_SEARCH:
			return {
				fases: action.payload.data
			};
		default:
			return state;
	}
}