import React, { useState } from "react"
import { toast } from "react-toastify"
import { Button, Icon, Form, Input } from "semantic-ui-react"
import { v4 as uuidv4 } from 'uuid'

// Components
import LessonInput from "../components/LessonInput/LessonInput"
import TestInput   from "../components/TestInput/TestInput"
import VideoInput  from "../components/VideoInput/VideoInput"

// Styles
import "./CreateUnit.scss"

const CreateUnit = (props) => {

	const [lessons,   setLessons] = useState([])
	const [tests,     setTests]   = useState([])
	const [videos,    setVideos]  = useState([])

	const handlerShowPassword = e => {

	}

	const onChange = e => {

	}

	const onSubmit = () => {
		
	}

	const addLesson = () => {

		const copy = [
			...lessons,
			{
				id:    uuidv4(),
				title: "Lesson " + (lessons.length + 1)
			}
		]

		setLessons(copy)
	}

	const updateLesson = (lesson) => {

		const mapped = lessons.map(elem => elem.id != lesson.id ? elem : lesson)
		
		setLessons(mapped)
	}

	const deleteLesson = (id) => {

		const copy = lessons.filter(elem => elem.id !== id)

		setLessons(copy)
	}

	const addTest = () => {

		const copy = [
			...tests,
			{
				id: uuidv4(),
				title: "Test " + (tests.length + 1),
				formURL: "", 
				spreadsheetURL: "",
			}
		]

		setTests(copy)
	}

	const updateTest = (test) => {

		const mapped = tests.map(elem => elem.id != test.id ? elem : test)
		
		setLessons(mapped)
	}

	const deleteTest = (id) => {

		const copy = tests.filter(elem => elem.id !== id)

		setTests(copy)
	}

	const addVideos = () => {

		const copy = [
			...videos,
			{
				id: uuidv4(),
				title: "", 
				link: ""
			}
		]

		setVideos(copy)
	}

	const updateVideo = (video) => {

		const mapped = videos.map(elem => elem.id != video.id ? elem : video)
		
		setVideos(mapped)
	}

	const deleteVideo = (id) => {

		const copy = videos.filter(elem => elem.id !== id)

		setVideos(copy)
	}

	return (
		<div className="main">
			
			<div className="container">
				
				<h1>Lecciones</h1>

				{lessons && lessons.map(lesson => 
					<div className="inline-inputs">
						
						<LessonInput data={lesson} setData={updateLesson}/>
						
						<div className="delete-button">
							<Button icon onClick={() => deleteLesson(lesson.id)}>
								<Icon name="delete"></Icon>
							</Button>
						</div>
					</div>
				)}
					
				<div className="add-button">
					<Button onClick={addLesson}>Añadir Lección</Button>
				</div>
			</div>

			<div className="container">
				
				<h1>Tests</h1>

				{tests && tests.map(test => 
					<div className="inline-inputs">
						
						<TestInput data={test} setData={updateTest}/>

						<div className="delete-button">
							<Button icon onClick={() => deleteTest(test.id)}>
								<Icon name="delete"></Icon>
							</Button>
						</div>
					</div>
				)}
				
				<div className="add-button">
					<Button onClick={addTest}>Añadir Test</Button>
				</div>

			</div>

			<div className="container">
				
				<h1>Videos</h1>

				{videos && videos.map(test => 
					<div className="inline-inputs">
						
						<VideoInput data={test} setData={updateVideo}/>

						<div className="delete-button">
							<Button icon onClick={() => deleteVideo(test.id)}>
								<Icon name="delete"></Icon>
							</Button>
						</div>
					</div>
				)}
				
				<div className="add-button">
					<Button onClick={addVideos}>Añadir Video</Button>
				</div>

			</div>
		</div>
	)
}

export default CreateUnit