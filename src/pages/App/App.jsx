import React from 'react'
import PropTypes from 'prop-types'

class App extends React.PureComponent {
	render() {
		const {
			children,
		} = this.props

		return (
			<div className="react-app">
				<h1>App component 5</h1>
				{children}
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.node.isRequired,
}

export default App
