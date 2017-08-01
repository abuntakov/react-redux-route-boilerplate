import React from 'react'
import ReactDOM from 'react-dom'

import { Root } from './pages'

const render = (props) => {
	ReactDOM.render(
		<Root {...{...props }} />,
		document.getElementById('root'),
	)
}

render()
