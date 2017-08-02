import React from 'react'
import {
	BrowserRouter as Router,
} from 'react-router-dom'

import {
	App,
} from '../'

export default function Root(props) {
	return (
		<Router>
			<App />
		</Router>
	)
}
