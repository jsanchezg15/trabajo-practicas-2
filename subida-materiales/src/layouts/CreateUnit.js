import React, { useState } from "react"
import { toast } from "react-toastify"
import { Button, Icon, Form, Input } from "semantic-ui-react"
import { v4 as uuidv4 } from 'uuid'
import { storage, db } from "../pages/utils/Firebase/Firebase"
import getHTML   from "../pages/GoogleFromExtract/HtmlParser/HtmlParser"

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

	const onChange = e => {

	}

	const onSubmit = () => {
		
	}

	const upload = async () => {

		console.log(lessons)
		console.log(tests)
		console.log(videos)

		await uploadImages()
		await uploadTests()

		const myLessons = lessons.map(lesson => {
			return {
				title:  lesson.title,
				pdfURL: lesson.pdfURL || "", 
				slides: lesson.urls
			}
		})

		const myTests = tests.map(test => {
			return {
				title:       test.title,
				testObj:     test.testObj,
				answerLink:  test.spreadsheetURL,
				responseURL: test.responseURL
			}
		})

		const myVideos = []

		const myUnit = {
			title: "General Spanish U1",
			lessons: myLessons,
			tests:   myTests,
			videos:  myVideos
		}

		const str = JSON.stringify(myUnit)

		await db.collection("courses").add({json: str})
	}


	const uploadTests = async () => {

		try {
			const promises = tests.map(test => getHTML(test))

			await Promise.all(promises)
		}
		catch(e) {
			toast.error(e)
		}
	}

	const uploadImages = async (title) => {
		
		try {
			const ref = (title || "noReference") + "/"

			const promises = lessons.map(lesson => postLessonImages(lesson, ref))
			
			await Promise.all(promises)
		}
		catch(e) {
			toast.error(e)
		}
	}


	const postLessonImages = async (lesson, ref) => {
		
		try {
			const promises = lesson.files.map(image => postImage(image, ref + "/" + lesson.title + "/"))

			await Promise.all(promises)

			lesson.urls = lesson.files.map(elem => elem.url)

			if(lesson.urls.includes(""))
				throw "Some images have not been uploaded correctly"

			toast.info(lesson.title + " files uploaded correctly")
		}
		catch(err) {
			toast.error(err)
		}
		finally {
			console.log(lessons)
			//setImages([])
			//setSearching(false)
			//setProgress(0)
		}
	}

	const postImage = async (image, ref) => {
		try {
			const uploadTask = await storage.ref(ref + image.id).put(image, {contentType: image.mimetype})
			const imageURL   = await storage.ref(ref + image.id).getDownloadURL()

			//setProgress(100 * ++uploadedImages / images.length)

			if( !imageURL.includes("https://firebasestorage.googleapis.com") ) 
				throw {message: "ERROR: The url is not correct..."}
			
			image.url = imageURL
		}
		catch(e) {
			console.log(e.message || "Error uploading image")
		}
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
		
		setTests(mapped)
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

				{videos && videos.map(video => 
					<div className="inline-inputs">
						
						<VideoInput data={video} setData={updateVideo}/>

						<div className="delete-button">
							<Button icon onClick={() => deleteVideo(video.id)}>
								<Icon name="delete"></Icon>
							</Button>
						</div>
					</div>
				)}
				
				<div className="add-button">
					<Button onClick={addVideos}>Añadir Video</Button>
				</div>

			</div>

			<Button onClick={upload}>Upload</Button>
		</div>
	)
}

export default CreateUnit