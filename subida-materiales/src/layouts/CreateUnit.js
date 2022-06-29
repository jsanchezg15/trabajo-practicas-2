import React, { useState } from "react"
import { Button, Icon, Form, Input } from "semantic-ui-react"
import { toast } from "react-toastify"
import LessonInput from "../components/LessonInput/LessonInput"
import TestInput from "../components/TestInput/TestInput"
import { v4 as uuidv4 } from 'uuid'

import "./CreateUnit.scss"

const CreateUnit = (props) => {

	const [lessons,   setLessons]   = useState([])
	const [tests,     setTests]     = useState([])

	const handlerShowPassword = e => {

	}

	const onChange = e => {

	}

	const onSubmit = () => {
		
	}

	const addLesson = () => {

		const copy = [
			...lessons,
			{id: uuidv4()}
		]

		setLessons(copy)
	}

	const deleteLesson = (id) => {

		console.log(lessons)
		const copy = lessons.filter(elem => elem.id !== id)
		console.log(copy)
		setLessons(copy)
	}

	const addTest = () => {

		const copy = [
			...tests,
			{id: uuidv4()}
		]

		setTests(copy)
	}

	const deleteTest = (id) => {

		const copy = tests.filter(elem => elem.id !== id)

		setTests(copy)
	}

	return (
		<div className="main">
			
			<div className="container">
				<h1>Lecciones</h1>

				{lessons && lessons.map(lesson => 
					<div className="inline-inputs">
						
						<LessonInput/>
						
						<div className="delete-button">
							<Button icon onClick={() => deleteLesson(lesson.id)}>
								<Icon name="delete"></Icon>
							</Button>
						</div>
					</div>
				)}
					
				<div className="buttons">
					<div className="add-button">
						<Button icon onClick={addLesson}>
							<Icon name="add"></Icon>
						</Button>
					</div>
				</div>
			</div>

			<h1>Tests</h1>

			{tests && tests.map(test => <TestInput num={test.num}/>)}
			
			<div className="buttons">
				<div className="add-button">
					<Button icon onClick={addTest}>
						<Icon name="add"></Icon>
					</Button>
				</div>
				<div className="delete-button">
					<Button icon onClick={deleteTest}>
						<Icon name="delete"></Icon>
					</Button>
				</div>
			</div>

		</div>
	)
}

export default CreateUnit