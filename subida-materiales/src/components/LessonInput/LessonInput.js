import React, { useState } from "react"
import { Button, Icon, Form, Input } from "semantic-ui-react"
import { toast } from "react-toastify"
import MyDropzone from "../../pages/UploadImagesFirebase/page/MyDropzone"

import "./LessonInput.scss"

const LessonInput = (props) => {
	
	const { data, setData } = props

	const [addPDF, setAddPDF] = useState(false)


	const onChange = e => {
		
		const obj = {
			...data,
			[e.target.name]: e.target.value
		}

		console.log(obj)
		setData(obj)
	}


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
						onInput={(e) => console.log(e)}
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