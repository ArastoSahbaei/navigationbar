import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'



export const Routing = (props) => {
	return (
		<Router>
			{props.children}
			<Switch>
				<Route component={HomeView} />
			</Switch>
		</Router>
	)
}