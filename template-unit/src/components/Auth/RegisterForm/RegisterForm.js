import React, { useState } from 'react'
import { Button, Icon, Form, Input } from "semantic-ui-react"
import { auth } from "../../../utils/Firebase"
import { validateEmail } from "../../../utils/Validations"
import { toast } from "react-toastify"
import "./RegisterForm.scss"


export default function RegisterForm(props) {

	const { setSelectedForm } = props

	const [formData,     setFormData]     = useState({ email: "", password: "", username: "" })
	const [showPassword, setShowPassword] = useState(false)
	const [formError,    setFormError]    = useState({})
	const [isLoading,    setIsLoading]    = useState(false)

	const handlerShowPassword = () => {
		setShowPassword(!showPassword)
	}

	const onChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const onSubmit = () => {

		const errors = {}

		if (!validateEmail(formData.email)) 
			errors.email = true
		
		if (formData.password.length < 6) 
			errors.password = true

		if (!formData.username) 
			errors.username = true

		setFormError(errors)

		const formOk = Object.keys(errors).length == 0

		if(formOk) {
			setIsLoading(true)

			auth
			.createUserWithEmailAndPassword(formData.email, formData.password)
			.then(() => {
				changeUserName()
				sendVerificationEmail()
			})
			.catch(() => {
				toast.error("Error creating the account")
			})
			.finally(() => {
				setIsLoading(false)
				setSelectedForm(null)
			})
		}
	}

	const changeUserName = () => {
		auth
		.currentUser
		.updateProfile({
			displayName: formData.username
		})
		.catch(() => {
			toast.error("Error asigning nickname")
		})
	}

	const sendVerificationEmail = () => {
		auth
		.currentUser
		.sendEmailVerification()
		.then(() => {
			toast.success("Please check your email to verify your account.")
		})
		.catch(() => {
			toast.error("Error sending verification email.")
		})
	}

	return (
		<div className="register-form">
			<h1>Join us for the best spanish teaching experience!</h1>
			
			<Form onSubmit={onSubmit} onChange={onChange}>
			
				<Form.Field>
					<Input
						type="text"
						name="email"
						placeholder="email"
						icon="mail outline"
						error={formError.email}
					/>
					
					{formError.email && <span className="error-text">   Please introduce a valid mail.   </span>}
				</Form.Field>
				
				<Form.Field>
					<Input
						type={showPassword ? "text" : "password"}
						name="password"
						placeholder="password"
						error={formError.password}
						icon={
							<Icon
								name={"eye" + (showPassword ? " slash outline" : "")}
								link
								onClick={handlerShowPassword}
							/>
						}
					/>

					{formError.password && <span className="error-text">   Please introduce a password greater than 5 characters.   </span>}
				</Form.Field>
				
				<Form.Field>
					<Input
						type="Text"
						name="username"
						placeholder="username"
						icon="user circle outline"
						error={formError.username}
					/>
					
					{formError.password && <span className="error-text">   Please introduce a username.   </span>}
				</Form.Field>
			
				<Button type="submit" loading={isLoading}>
					Submit
				</Button>
			
			</Form>

			<div className="register-form__options">
				<p onClick={() => setSelectedForm(null)}>Back</p>
				<p>
					I already have a Comligo account{" "}
					<span onClick={() => setSelectedForm("login")}>Login</span>
				</p>
			</div>
		</div>
	)
}
