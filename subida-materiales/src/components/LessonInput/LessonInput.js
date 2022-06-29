import React, { useState, useEffect } from "react"
import { Button, Icon, Form, Input } from "semantic-ui-react"
import { toast } from "react-toastify"
import MyDropzone from "../../pages/UploadImagesFirebase/page/MyDropzone"

import "./LessonInput.scss"

const LessonInput = (props) => {
	
	const { data, setData } = props

	const [addPDF, setAddPDF] = useState(false)
	const [files,  setFiles]  = useState([])

	const onChange = e => {
		
		const obj = {
			...data,
			[e.target.name]: e.target.value
		}

		setData(obj)
	}

	useEffect(() => {
		
		const obj = {
			...data,
			files: files
		}

		setData(obj)

	}, [files])


	return (	
		<div className="main-lesson">

			<div className="inline">

				<Input
					type="text"
					name="title"
					value={data.title || ""}
					onChange={e => onChange(e)}
					placeholder="Título"
				/>

				{!addPDF && <Button onClick={() => setAddPDF(true)}>Añadir PDF</Button>}

				{addPDF  && <Button onClick={() => setAddPDF(false)}>Borrar PDF</Button>}

			</div>


			{addPDF && 
				<div className="pdf-input">
					<Input
						type="file"
						name="pdfURL"
						placeholder="PDF File"
						onChange={e => onChange(e)}
						icon="file"
					/>
				</div>
			}

			<div className="dropzone">
				<MyDropzone setFiles={setFiles}/>
			</div>
		</div>
	)
}

export default LessonInput