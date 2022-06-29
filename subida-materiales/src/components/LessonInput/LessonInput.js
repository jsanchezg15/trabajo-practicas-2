import React, { useState } from "react"
import { Button, Icon, Form, Input } from "semantic-ui-react"
import { toast } from "react-toastify"
import MyDropzone from "../../pages/UploadImagesFirebase/page/MyDropzone"
import { v4 as uuidv4 } from 'uuid'

import "./LessonInput.scss"

const LessonInput = (props) => {
	
	const [formData,     setFormData]  = useState({})
	const [formError,    setFormError] = useState({})
	const [addPDF   ,    setAddPDF]    = useState(false)


	const onChange = e => {
		const obj = {
			...formData,
			[e.target.name]: e.target.value
		}

		console.log(obj)
		setFormData(obj)
	}

	const onSubmit = () => {
		
	}

	const onInputFiles = () => {
		
	}

	return (	
		<div className="main-lesson">

			<div className="inline">

				<Input
					type="text"
					name="Title"
					default="Lesson "
					placeholder="Título"
				/>

				{!addPDF && <Button onClick={() => setAddPDF(true)}>Añadir PDF</Button>}

				{addPDF  && <Button onClick={() => setAddPDF(false)}>Borrar PDF</Button>}

			</div>


			{addPDF && 
				<div className="pdf-input">
					<Input
						type="file"
						name="pdf"
						placeholder="PDF File"
						onInput={(e) => onInputFiles(e)}
						icon="file"
					/>
				</div>
			}

			<div className="dropzone">
				<MyDropzone setImages={() => console.log("Hola")}/>
			</div>
		</div>
	)
}

export default LessonInput