import React, { useState, useEffect } from 'react'
import { Container } from "semantic-ui-react"
import { isWaitingAnswers } from '../../utils/Api'
import { toast } from "react-toastify"
import firebase from "../../utils/Firebase"
import Qs from "qs"

import './L1work.scss'

const db     = firebase.firestore(firebase)
const skill  = "Vocabulary"
const answer = "$SPREADSHEET_URL$"

const L1work = (props) => {

	const {user, idclass, classname, teachername} = props

	const [formData,    setformData]    = useState("")
	const [userDetails, setUserDetails] = useState('')
	const [waiting,     setWaiting]     = useState(false)
	const [isLoading,   setIsLoading]   = useState(false)
 

	// Course details user

	useEffect(() => {
		db.collection('waiting')
		.doc(user.uid).get()
		.then(snapshot => setUserDetails(snapshot.data()))	
	}, [])

	
	// Set is waiting answers  

	useEffect(() => {
		isWaitingAnswers(user.uid).then(response => setWaiting(response))     
	}, [user])


	const onChange = e => {
		setformData({
			...formData,
			[e.target.name]: e.target.value
		})
	}


	// Send response record

	const respuesta = () => {

		db.collection("answers").add({
			user:           user.uid,
			useremail:      user.email,
			username:       user.displayName,
			userwork:       "one",
			usercourse:     userDetails.course,
			userlevel:      userDetails.level,
			userclassid:    idclass,
			userclassname:  classname,
			avatarUser:     user.photoURL,
			createAt:       new Date(),
			Teacher:        teachername,
			answerlink:     answer,
			studentskill:   skill
		})
		.then(() => {
			toast.success("The responses are already sent.")
			setIsLoading(false)
		})
		.catch(() => {
			toast.warning("Error recording the responses.")
			setIsLoading(false)
		})
	}


	// Reset fields

	const resetFields = () => { 
		document.getElementById("l1-course-form").reset()
	}
	

	// Submit function  

	const onSubmit = (e) => {
		
		const str = Qs.stringify(formData)
		e.preventDefault()
			
		fetch('$RESPONSE_URL$', {
			method: 'post',
			headers: {'Content-Type':'application/x-www-form-urlencoded'},
			mode: 'no-cors',
			body: str,
			redirect: 'follow'
		})
		.then(() => {
			respuesta()
			resetFields()
		})
	}
	

	return (
		<>
			{waiting ? (     
				<div className="App">
					<header className="App-header">
$FORM_CODE$
					</header>
				</div>
			) : (
				<div style={{ backgroundColor: '#101010', height: '260vh' }}>
					<Container>
						<p className="not-assigned">
							You already sent your answers!
						<br></br>
							or
						<br></br>
							You don't have a class assigned yet.
						</p>
					</Container>
				</div>
			)}
		</>
	)
}

export default  L1work