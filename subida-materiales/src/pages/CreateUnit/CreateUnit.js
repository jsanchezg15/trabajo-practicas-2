import React, { useState } from "react"
import { toast } from "react-toastify"
import { Button, Icon, Input } from "semantic-ui-react"
import { v4 as uuidv4 } from 'uuid'
import { storage, db } from "../../utils/Firebase/Firebase"
import getHTML from "../../utils/HtmlParser/HtmlParser"

// Components
import LessonInput from "../../components/LessonInput/LessonInput"
import TestInput   from "../../components/TestInput/TestInput"
import VideoInput  from "../../components/VideoInput/VideoInput"

// Styles
import "./CreateUnit.scss"

const CreateUnit = (props) => {

	const [title,   setTitle]   = useState("General Spanish Unit 1")
	const [lessons, setLessons] = useState([])
	const [tests,   setTests]   = useState([])
	const [videos,  setVideos]  = useState([])

	const upload = async () => {

		console.log(lessons)
		console.log(tests)
		console.log(videos)

		if(!checkErrors())
			return 

		await uploadLessons()
		await uploadTests()

		parseVideos()

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

		const myVideos = videos.map(video => {
			return {
				key: 'af',
				value: video.id,
				text: video.title
			}
		})

		const myUnit = {
			title:   title,
			lessons: myLessons,
			tests:   myTests,
			videos:  myVideos
		}

		const str = JSON.stringify(myUnit)
		const id  = uuidv4()

		await db.collection("courses").add({
			id: id,
			title: title,
			str: str
		})

		toast.success("¡Materiales subidos!")
	}


	const checkErrors = () => {

		try {
			
			if(!title || title == "")
				throw "Please introduce a title for the course"

			lessons.forEach(lesson => {
				if(!lesson.title || lesson.title == "")
					throw "Please introduce a title every lesson"
			})

			lessons.forEach(lesson => {
				if(!lesson.files || lesson.files.length == 0)
					throw "Please introduce the images for lesson named '" + lesson.title + "'"
			})

			tests.forEach(test => {
				if(!test.title || test.title == "")
					throw "Please introduce a title for every test"
			})

			tests.forEach(test => {
				if(!test.formURL || test.formURL == "")
					throw "Please introduce the form URL for test named '" + test.title + "'"
			})

			tests.forEach(test => {
				if(!test.spreadsheetURL || test.spreadsheetURL == "")
					throw "Please introduce the spreadsheet URL for test named '" + test.title + "'"
			})

			videos.forEach(video => {
				if(!video.title || video.title == "")
					throw "Please introduce a title for every video"
			})

			videos.forEach(video => {
				if(!video.link || video.link == "")
					throw "Please introduce the link for video named '" + video.title + "'"
			})

			videos.forEach(video => {
				if(!validateYouTubeUrl(video.link))
					throw "Please introduce a YouTube link for video named '" + video.title + "'"
			})

			return true
		}
		catch(e) { 
			toast.error(e)
			return false
		}

	}

	const validateYouTubeUrl = (url) => {
		var regEx = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
		return url.match(regEx)
	}

	const parseVideos = () => {

		const youtube_parser = (url) => {
			var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
			var match = url.match(regExp);
			return (match&&match[7].length==11)? match[7] : false;
		}

		videos.forEach(video => 
			video.id = youtube_parser(video.link)
		)
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

	const uploadLessons = async () => {
		
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
				throw "ERROR: La url pude no ser correcta..."

			
			if(lesson.filePDF && lesson.filePDF != "") {
				
				const id = uuidv4()

				const uploadTask = await storage.ref(ref + "/" + lesson.title + "/" + id).put(lesson.filePDF, {contentType: lesson.filePDF.mimetype})
				const reference  = await storage.ref(ref + "/" + lesson.title + "/" + id).getDownloadURL()
		
				if( !reference.includes("https://firebasestorage.googleapis.com") ) 
					throw "ERROR: La url pude no ser correcta..."
				
				lesson.pdfURL = reference
			}
		}
		catch(err) {
			toast.error(err)
		}
	}

	const postImage = async (image, ref) => {
		try {
			const uploadTask = await storage.ref(ref + image.id).put(image, {contentType: image.mimetype})
			const imageURL   = await storage.ref(ref + image.id).getDownloadURL()

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