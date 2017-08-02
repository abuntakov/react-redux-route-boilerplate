import * as actions from './job.constants'

export const fetchJobList = (params) => ({
	type: actions.FETCH_JOB_LIST,
})

export const fetchJobListSuccessEvent = ({ jobs }) => ({
	type: actions.FETCH_JOB_LIST_SUCCESS_EVENT,
	jobs,
})

export const fetchJobListErrorEvent = error => ({
	type: actions.FETCH_JOB_LIST_ERROR_EVENT,
	error,
})
