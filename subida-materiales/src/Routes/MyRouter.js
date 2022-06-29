import React from 'react'
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'

// Components
import CreateUnit from '../layouts/CreateUnit'
import Auth from '../pages/Auth/page/Auth/Auth'

const MyRouter = (props) => {

	const user = props.user

	return (
		<BrowserRouter>
			{
				user ? 
					<Redirect to="/unit-creator"/> 
				: 
					<Redirect to="/auth"/>
			}

			<Switch>
				<Route path="/auth">
					<Auth/>
				</Route>
				<Route path="/unit-creator">
					<CreateUnit/>
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default MyRouter