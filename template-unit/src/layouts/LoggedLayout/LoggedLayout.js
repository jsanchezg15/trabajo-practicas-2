import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Routes from "../../routes/Routes"
import Hamburgesa from '../../components/Hamburgesa'

import "./LoggedLayout.scss"

const LoggedLayout = (props) => {

	const { user, setReloadApp, course } = props

	return (
		<div style={{ backgroundColor: '#101010', height: '100%'}}>
			<Router>
				<Hamburgesa course={course}/>
				
				<Routes 
					user={user} 
					setReloadApp={setReloadApp}  
					course={course}
				/>           
			</Router>
		</div>  	
	)
}

export default LoggedLayout