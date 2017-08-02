import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import { Root } from './pages'
import reducers from './reducers'

const history = createHistory()
const middleware = routerMiddleware(history)

const store = createStore(
	combineReducers({
		...reducers,
		router: routerReducer
	}),
	applyMiddleware(middleware)
)

const render = (Component, props) => {
	ReactDOM.render(
		<AppContainer>
			<Component {... { store, history, ...props }} />
		</AppContainer>,
		document.getElementById('root'),
	)
}

render(Root)

if (module.hot) {
	console.log('HOT')
	module.hot.accept('./reducers', () => {
		const newReducers = require('./reducers')

		store.replaceReducer(combineReducers({
			...newReducers,
			router: routerReducer
		}))
	})
	module.hot.accept()
}
