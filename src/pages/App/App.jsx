import React from 'react'
import PropTypes from 'prop-types'

class App extends React.PureComponent {
	render() {
		const {
			children,
		} = this.props

		return (
			<div className="react-app">
				<h1>App component</h1>
				{children}
			</div>
		)
	}
}

App.propTypes = {
	children: PropTypes.node.isRequired,
}

function mapStateToProps(state) {
	return {
		app: state.get('app'),
	}
}

export default App
