import React from 'react'
import PropTypes from 'prop-types'

class Profile extends React.PureComponent {
	render() {
		const {
			children,
		} = this.props

		return (
			<div>
				<h1>Profile component 2</h1>
				{children}
			</div>
		)
	}
}

Profile.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Profile
