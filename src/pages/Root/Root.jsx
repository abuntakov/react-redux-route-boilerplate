import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import {
	App,
} from '../'

export default class Root extends React.Component {
	render() {
		const {
			store,
			history,
		} = this.props

		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<App />
				</ConnectedRouter>
			</Provider>
		)
	}
}
