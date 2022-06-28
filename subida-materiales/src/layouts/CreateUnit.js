import React, { useState } from "react"
import { Button, Icon, Form, Input } from "semantic-ui-react"
import { toast } from "react-toastify"

import "./CreateUnit.scss"

const CreateUnit = (props) => {

	const { setSelectedForm } = props

	const [showPassword, setShowPassword] = useState(false)
	const [formData,     setFormData]     = useState({email: "", password: ""})
	const [formError,    setFormError]    = useState({})
	const [isLoading,    setIsLoading]    = useState(false)
	const [userActive,   setUserActive]   = useState(true)
	const [user,         setUser]         = useState(null)


	const handlerShowPassword = e => {

	}

	const onChange = e => {

	}

	const onSubmit = () => {
		
	}

	return (
		<div className="main">
			<h1>Spanish courses for all</h1>

			<Form onSubmit={onSubmit} onChange={onChange}>
				
				<Form.Field>
					<Input
						type="text"
						name="email"
						placeholder="email"
						icon="mail outline"
						error={formError.email}
					/>
					{formError.email && <span className="error-text"> Please give a valid email. </span>}
				</Form.Field>
				
				<Form.Field>
					<Input
						type={showPassword ? "text" : "password"}
						name="password"
						placeholder="password"
						error={formError.password}
						icon={
							<Icon
								name={"eye" + showPassword ? " slash outline" : ""}
								link
								onClick={handlerShowPassword}
							/>
						}
					/>
					{formError.password && <span className="error-text"> Please insert a password greatter than 5 characters. </span>}
				</Form.Field>

				<Button className="login "type="submit" loading={isLoading}>
					Log in
				</Button>

				<Button className="change "type="submit" onClick={() => setSelectedForm("reset")}>
					Forgot password?
				</Button>
			</Form>

			<div className="login-form__options">
				<p onClick={() => setSelectedForm(null)}>Back</p>
				<p>
					I don´t have a Comligo account{" "}
					<span onClick={() => setSelectedForm("register")}>Register</span>
				</p>
			</div>
		</div>
	)
}

export default CreateUnit