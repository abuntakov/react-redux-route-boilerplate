import { fromJS } from 'immutable'

import {
	FETCH_JOB_LIST,
	FETCH_JOB_LIST_SUCCESS_EVENT,
	FETCH_JOB_LIST_ERROR_EVENT,
} from './job.constants'

const initialState = fromJS({
	count: 0,
})

export default function jobReducer(state = initialState, action = {}) {
	switch (action.type) {
	case FETCH_JOB_LIST:
		return state.set('count', state.get('count', 0) + 1)
	default:
		return state
	}
}
