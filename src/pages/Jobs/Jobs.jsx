import React from 'react'
import { connect } from 'react-redux'

import * as jobActions from 'app/modules/job/job.actions'

class Jobs extends React.PureComponent {
	render() {
		const {
			jobsCount,
			fetchJobList,
		} = this.props

		return (
			<div>
				<h1>Job component</h1>
				<h2>Count {jobsCount}</h2>
				<button onClick={() => fetchJobList()}>FETCH ME</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		jobsCount: state.getIn(['job', 'count'], 0),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchJobList: () => {
			dispatch(jobActions.fetchJobList())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
