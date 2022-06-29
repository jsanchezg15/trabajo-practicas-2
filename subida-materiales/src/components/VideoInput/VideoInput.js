import React from "react"
import { Input } from "semantic-ui-react"

import "./VideoInput.scss"

const VideoInput = (props) => {
	
	const { data, setData } = props


	const onChange = e => {
		
		const obj = {
			...data,
			[e.target.name]: e.target.value
		}

		console.log(obj)
		setData(obj)
	}


	return (
		<div className="main-video">

			<div className="title-input">
				<Input
					type="text"
					name="title"
					value={data.title}
					onChange={onChange}
					placeholder="Título"
				/>
			</div>

			<div className="link-input">
				<Input
					type="text"
					name="link"
					value={data.link}
					onChange={onChange}
					placeholder="YouTube url"
					icon="youtube"
				/>
			</div>
			
		</div>
	)
}

export default VideoInput