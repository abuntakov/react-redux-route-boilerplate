import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import { Root } from './pages'

const render = (props) => {
	ReactDOM.render(
		<AppContainer>
			<Root {...{ ...props }} />
		</AppContainer>,
		document.getElementById('root'),
	)
}

render()

if (module.hot) {
	module.hot.accept('./pages/Root/Root', () => { render() })
}
