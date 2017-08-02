import React from 'react'

import {
	Link,
	Redirect,
	Route,
	withRouter,
} from 'react-router-dom'

import {
	Jobs,
	Profile,
} from '../'

class App extends React.PureComponent {
	render() {
		return (
			<div className="react-app">
				<h1>App children component 2</h1>
				<ul>
					<li><Link to="/jobs">Jobs</Link></li>
					<li><Link to="/profile">Profile</Link></li>
				</ul>

				<hr/>
				<Route path="/jobs" component={Jobs} />
				<Route path="/profile" component={Profile} />
			</div>
		)
	}
}

export default withRouter(App)
