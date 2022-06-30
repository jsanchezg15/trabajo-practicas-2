import React, { useState, useEffect } from 'react'
import { Button, Container } from "semantic-ui-react"
import { toast } from "react-toastify"
import { db } from "../../utils/Firebase"
import Qs from "qs"

import './Test.scss'

const Test = (props) => {

	const { user, testObj, answerLink, responseURL } = props

	const [formData,    setformData]    = useState("")
	const [waiting,     setWaiting]     = useState(false)
	const [isLoading,   setIsLoading]   = useState(false)

	// Set is waiting answers  
	useEffect(() => {
		db.collection("responses")
		.where("user", "==", user.uid)
		.get()
		.then(response => {

			const myAnswers = response?.docs.map(doc => doc.data())

			const result = !myAnswers.some(elem => elem.answerlink == answerLink)

			setWaiting(result)
		})
	}, [user]) 
	console.log(testObj)

	const onChange = e => {
		setformData({
			...formData,
			[e.target.name]: e.target.value
		})
	}


	// Send response record
	const respuesta = () => {

		db.collection("responses")
		.add({
			user:       user.uid,
			useremail:  user.email,
			createAt:   new Date(),
			answerlink: answerLink,
		})
		.then(() => {
			toast.success("The responses have been sent.")
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

		fetch(responseURL, {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
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
		<div>
			{waiting ? (
				<div className="App">
					<header className="App-header">
						
						<form onChange={onChange} className="trabajo-l1" id="l1-course-form">

							{/* Title */}

							<fieldset>
								<div>
									<h2 className="L1">{testObj.title}</h2>
								</div>
							</fieldset>


							{/* Description */}

							<fieldset>
								<div className="parrafo-uno">
									<p>{testObj.description}</p>
								</div>
							</fieldset>


							{/* email */}

							<fieldset>
								<legend for="" className="leyenda">Email</legend>
								<div className="form-group">
									<input id="emailAddress" type="email" name="emailAddress" className="form-control" required/>
								</div>
							</fieldset>


							{/* Questions */}

							{testObj && testObj.questions && testObj.questions.map(elem => {
								
								{/* Reading text */}

								if(elem.type === "reading_text") {
									return (
										<fieldset>
											<legend for={elem.label} className={"leyenda"}>{elem.legend}</legend>
											<div className="form-group">
												<div>{elem.text}</div>
											</div>
										</fieldset>
									)
								}

								{/* Radio inputs */}

								if(elem.type === "radio") {
									return (
										<fieldset>
											<legend for={elem.label} className={"leyenda"}>{elem.legend}</legend>
											<div className="form-group">
												{elem.options && elem.options.map(opt => 
													<div className="radio">
														<label className={"etiqueta"}>
															<input type="radio" name={"entry." + elem.entry} value={opt[0] !== "" ? opt[0] : "__other_option__"} required/>
															{"  " + opt[0]}
														</label>
														{opt[0] === "" && <input type="text" name={"entry." + elem.entry + ".other_option_response"} placeholder="Other"></input>}
													</div>
												)}
											</div>
										</fieldset>
									)
								}

								{/* Checkbox inputs */}

								if(elem.type === "checkbox") {
									return (
										<fieldset>
											<legend for={elem.label} className={"leyenda"}>{elem.legend}</legend>
											<div className="form-group">
												{elem.options && elem.options.map(opt => 
													<div className="checkbox">
														<label className={"etiqueta"}>
															<input type="radio" name={"entry." + elem.entry} value={opt[0] !== "" ? opt[0] : "__other_option__"} required/>
															{"  " + opt[0]}
														</label>
														{opt[0] === "" && <input type="text" name={"entry." + elem.entry + ".other_option_response"} placeholder="Other"></input>}
													</div>
												)}
											</div>
										</fieldset>
									)
								}

								{/* Dropdown inputs */}

								if(elem.type === "dropdown") {
									return (
										<fieldset>
											<legend for={elem.label} className={"leyenda"}>{elem.legend}</legend>
												<select name={"entry." + elem.entry}>
													<option disabled hidden selected>Choose an option</option>
													
													{elem.options && elem.options.map(opt => 
														<option value={opt[0]} required>  {opt[0]}  </option>
													)}
												</select>
										</fieldset>
									)
								}
							
								{/* Text inputs */}
								
								if(elem.type === "text" || elem.type === "paragraph") 
									return (
										<fieldset>
											<legend for={elem.label} className={"leyenda"}>{elem.legend}</legend>
											<input name={"entry." + elem.entry} type="text" className={elem.type}/>
										</fieldset>
									)
							})}
					
							<input type="hidden" name="fvv" value="1"/>
							<input type="hidden" name="fbzx" value="8461977738504272510"/>
							<input type="hidden" name="pageHistory" value="0"/>
							<div className="center">
								<Button className="btn-primary-uno" onClick={onSubmit} isLoading={isLoading}>Send</Button>
							</div>
						</form>
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
		</div>
	)
}


export default Test