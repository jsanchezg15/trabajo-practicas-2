import React, { useState, useEffect } from 'react'
import { Button, Container } from "semantic-ui-react"
import { toast } from "react-toastify"
import Qs from "qs"
import firebase from "../../utils/Firebase"
import './Test.scss'

const db = firebase.firestore(firebase)

const SHEET = "https://docs.google.com/spreadsheets/d/1KhkOeCjrmK-GU8zopznOKxTRSKPGo2d_fnWAckIo3os/edit?resourcekey#gid=1659951538"
const SKILL = "Test"
const WORK  = "Final Test"

const U1Test = (props) => {

	const { user, setReloadApp, idclass, classname, teachername } = props

	const [waiting,     setWaiting]     = useState(false)
	const [isLoading,   setIsLoading]   = useState(false)
	const [formData,    setformData]    = useState('')
	const [userDetails, setUserDetails] = useState('')


	// Course details user
	useEffect(() => {
		if(!idclass) 
			return
		
		db.collection("studentclass")
		.doc(idclass)
		.get()
		.then(response => {
			const data = response?.data()

			setUserDetails({
				course: data?.course || "Null",
				level:  data?.level  || "Null"
			})
		})
	}, [idclass])


	// Set is waiting answers  
	useEffect(() => {
		db.collection("answers")
		.where("user", "==", user.uid)
		.get()
		.then(response => {

			const myAnswers = response?.docs.map(doc => doc.data())

			const found = !myAnswers.some(elem => elem.answerlink == SHEET)

			setWaiting(found)
		})
	}, [user]) 
	
	
	// Formdata state  
	const onChange = e => {
		setformData({
			...formData,
			[e.target.name]: e.target.value
		})
	}


	// Send response record
	const respuesta = () => {

		db.collection("answers")
			.add({
				userwork:      WORK,
				answerlink:    SHEET,
				studentskill:  SKILL,

				user:          user.uid,
				useremail:     user.email,
				username:      user.displayName,
				avatarUser:    user.photoURL,

				usercourse:    userDetails.course,
				userlevel:     userDetails.level,
				
				userclassid:   idclass,
				userclassname: classname,
				Teacher:       teachername,

				createAt:      new Date(),
			})
			.then(() => 
				toast.success("The responses are already sent.")
			)
			.catch(() => 
				toast.warning("Error recording the responses.")
			)
			.finally(() => 
				setIsLoading(false)
			)
	}


	// Reset fields
	const resetFields = () => {
		document.getElementById("u1-course-form").reset()
	}


	// Delete function
	const borrar = () => {
		db.collection('waiting')
		.doc(user.uid)
		.delete()
		.then(() => {
			toast.success("You already completed the unit exercises.")
			setReloadApp(prevState => !prevState)
		})
		.catch(() => {
			toast.error("Error completing the unit exercises.")
		})
	}

	// On submit function
	const onSubmit = (e) => {

		var str = Qs.stringify(formData)

		e.preventDefault()

		fetch('https://docs.google.com/forms/d/e/1FAIpQLScTA73J8CNoJiLCy87gz_Tbur33zUqT1YwMhGZV3eZv1Ja6vw/formResponse', {
			method: 'post',
			mode: 'no-cors',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: str,
			redirect: 'follow'
		})
		.then(() => {
			respuesta()
			resetFields()
			borrar()
			setReloadApp(prevState => !prevState)
		})
	}

	return (
		<>
			{waiting ? (
				<div className="App">
					<header className="App-header">
						<form  onChange={onChange} className="trabajo-U1" id="u1-course-form">
							<fieldset>
								<div>
									<h2 className="U1">A13U3TEST</h2>
								</div>
							</fieldset>
							<fieldset>
								<div className="parrafo-u1">
									<p>Responde a las siguientes preguntas.</p>
								</div>
							</fieldset>
							<fieldset>
								<legend for="" className="leyenda-tres">Email</legend>
								<div class="form-group">
									<input id="emailAddress" type="email" name="emailAddress" class="form-control-estilo-tres" required/>
								</div>
							</fieldset>
							<fieldset>
								<legend for="1261649818" className="leyenda-tres">1. Yo _____________ español en línea.</legend>
								<div class="form-group">
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.1476503724" value="estoy estudio" required/>
											estoy estudio
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.1476503724" value="estoy estudiando" required/>
											estoy estudiando
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.1476503724" value="estar estudiando" required/>
											estar estudiando
										</label>
									</div>
								</div>
							</fieldset>
							<fieldset>
								<legend for="753167044" className="leyenda-tres">2. Últimamente no __________ porque tiene mucho trabajo.</legend>
								<div class="form-group">
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.1310202606" value="estoy viendo" required/>
											estoy viendo
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.1310202606" value="está viendo" required/>
											está viendo
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.1310202606" value="estamos viendo" required/>
											estamos viendo
										</label>
									</div>
								</div>
							</fieldset>
							<fieldset>
								<legend for="204261336" className="leyenda-tres">3. Las plantas de mi jardín se _______________</legend>
								<div class="form-group">
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.943156363" value="están muriendo." required/>
											están muriendo.
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.943156363" value="están moriendo." required/>
											están moriendo.
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.943156363" value="están murindo." required/>
											están murindo.
										</label>
									</div>
								</div>
							</fieldset>
							<fieldset>
								<legend for="1585020603" className="leyenda-tres">4. José ________________ cosas que no son verdad.</legend>
								<div class="form-group">
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.333959010" value="está diciendo" required/>
											está diciendo
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.333959010" value="está deciendo" required/>
											está deciendo
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.333959010" value="está decindo" required/>
											está decindo
										</label>
									</div>
								</div>
							</fieldset>
							<fieldset>
								<legend for="90817767" className="leyenda-tres">5. En mi ciudad hay ______ playa bonita.</legend>
								<div class="form-group">
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.75518962" value="una" required/>
											una
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.75518962" value="la" required/>
											la
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.75518962" value="un" required/>
											un
										</label>
									</div>
								</div>
							</fieldset>
							<fieldset>
								<legend for="634773120" className="leyenda-tres">6. En el centro de la ciudad _________ muchos bares.</legend>
								<div class="form-group">
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.1447305556" value="están" required/>
											están
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.1447305556" value="son" required/>
											son
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.1447305556" value="hay" required/>
											hay
										</label>
									</div>
								</div>
							</fieldset>
							<fieldset>
								<legend for="964575730" className="leyenda-tres">7. España _____ en Europa.</legend>
								<div class="form-group">
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.47216821" value="es" required/>
											es
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.47216821" value="hay" required/>
											hay
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.47216821" value="está" required/>
											está
										</label>
									</div>
								</div>
							</fieldset>
							<fieldset>
								<legend for="729841297" className="leyenda-tres">8. Mejoro mucho mi nivel de español  _____________ podcasts en español.</legend>
								<div class="form-group">
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.801409294" value="escuchiendo" required/>
											escuchiendo
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.801409294" value="escucharando" required/>
											escucharando
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.801409294" value="escuchando" required/>
											escuchando
										</label>
									</div>
								</div>
							</fieldset>
							<fieldset>
								<legend for="1976882747" className="leyenda-tres">9. Mis primos _________________ en mi casa por unos días. Están de visita.</legend>
								<div class="form-group">
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.204253479" value="viven" required/>
											viven
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.204253479" value="están viviendo" required/>
											están viviendo
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.204253479" value="están vivos" required/>
											están vivos
										</label>
									</div>
								</div>
							</fieldset>
							<fieldset>
								<legend for="1385795583" className="leyenda-tres">10. Yo ________ boliviano.</legend>
								<div class="form-group">
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.2144284926" value="estoy" required/>
											estoy
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.2144284926" value="soy" required/>
											soy
										</label>
									</div>
									<div class="radio">
										<label className="etiqueta-tres">
											<input type="radio" name="entry.2144284926" value="estoy siendo" required/>
											estoy siendo
										</label>
									</div>
								</div>
							</fieldset>
							<input type="hidden" name="fvv" value="1"/>
							<input type="hidden" name="fbzx" value="8461977738504272510"/>
							<input type="hidden" name="pageHistory" value="0"/>
							<div class="center">
								<Button className="btn-primary-uno" onClick={onSubmit} isLoading={isLoading}>Send</Button>
							</div>
						</form>
					</header>
				</div>
			) : (
				<div style={{ backgroundColor: '#101010', height: '260vh' }}>
					<Container>
						<p className="not-assigned-tres">
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

export default U1Test