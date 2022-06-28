import React from 'react'
import { Button } from "semantic-ui-react"
import firebase from "../../../utils/Firebase"
import "firebase/auth"

import "./Logout.scss"

const Logout = (props) => {

	const { setShowoglout } = props

	const logOut = () =>{ 
		firebase.auth().signOut()
	}

	const cancel = () =>{
		setShowoglout(false)
	}

	return (
		<div className="logout">
			<p>Are you sure you want to log out?</p>
			
			<Button className="accept" onClick={logOut}>
				Yes
			</Button>
			
			<Button className="cancel" onClick={cancel}>
				No
			</Button>
		</div>
	)
}

export default Logout