import React from "react"
import { Input } from "semantic-ui-react"

import "./TestInput.scss"

const TestInput = (props) => {
	
	const { data, setData } = props


	const onChange = e => {
		
		const obj = {
			...data,
			[e.target.name]: e.target.value
		}

		setData(obj)
	}


	return (
		<div className="main-test">

			<div className="title-input">

				<Input
					type="text"
					name="title"
					value={data.title}
					onChange={e => onChange(e)}
					placeholder="Título"
				/>
			</div>

			<div className="form-input">
				<Input
					type="text"
					name="formURL"
					value={data.formURL}
					onChange={e => onChange(e)}
					placeholder="form url"
					icon="linkify"
				/>
			</div>

			<div className="spreadsheet-input">
				<Input
					type="text"
					name="spreadsheetURL"
					value={data.spreadsheetURL}
					onChange={e => onChange(e)}
					placeholder="spreadsheet url"
					icon="file excel outline"
				/>
			</div>
			
		</div>
	)
}

export default TestInput