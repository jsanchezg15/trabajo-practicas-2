import React, { useState } from "react"
import { Button, Icon, Form, Input } from "semantic-ui-react"
import { toast } from "react-toastify"
import MyDropzone from "../../pages/UploadImagesFirebase/page/MyDropzone"
import { v4 as uuidv4 } from 'uuid'

import "./TestInput.scss"

const TestInput = (props) => {
	

	const onSubmit = () => {
		
	}

	const deleteTest = () => {
		
	}

	return (
		<div className="main-test">

			<div className="inline">

				<Input
					type="text"
					name="Title"
					default="Test Title"
					placeholder="Título"
				/>

				<Button onClick={() => deleteTest()}>Borrar Test</Button>

			</div>

			<div className="form-input">
				<Input
					type="text"
					name="formURL"
					placeholder="form url"
					icon="linkify"
				/>
			</div>

			<div className="spreadsheet-input">
				<Input
					type="text"
					name="spreadsheetURL"
					placeholder="spreadsheet url"
					icon="file excel outline"
				/>
			</div>
			
		</div>
	)
}

export default TestInput