import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'

// Styles
import './MyDropzone.scss'
import 'semantic-ui-css/semantic.min.css'

toast.configure()

const MyDropzone = (props) => {
	
	const { setFiles } = props

	const [num, setNum] = useState(0)

	const onDrop = useCallback(acceptedFiles => {
		
		acceptedFiles.forEach((file) => {
			file["id"] = uuidv4()
			file["preview"] = URL.createObjectURL(file)
			file["url"] = ""
		})

		try {
			acceptedFiles.sort((a, b) => (parseInt(a.name.split("-")[1].split(".")[0]) > parseInt(b.name.split("-")[1].split(".")[0]))? 1 : -1)
		}
		catch(e) {
			toast.warning("Error. Images may be messy")
		}

		setFiles(acceptedFiles)
		setNum(acceptedFiles.length)
	}, [])
	  
	const { getRootProps, getInputProps, isDragActive } = useDropzone( { onDrop } ) 

	
	return (
		<div className="dropzone" {...getRootProps()}>
		  	<input {...getInputProps()}/>
			<p className="dropzone__text">{isDragActive ? "Introduce..." : (num == 0 ? "Introduce las imágenes aquí" : (num + " imágenes introducidas"))}</p>
		</div>
	)
}

export default MyDropzone