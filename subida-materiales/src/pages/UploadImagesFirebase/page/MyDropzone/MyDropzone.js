import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify'

// Styles
import './MyDropzone.scss'
import 'semantic-ui-css/semantic.min.css'

toast.configure()

const MyDropzone = (props) => {
	
	const { setFiles } = props

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

	}, [])
	  
	const { getRootProps, getInputProps, isDragActive } = useDropzone( { onDrop } ) 

	
	return (
		<div className="dropzone" {...getRootProps()}>
		  	<input {...getInputProps()}/>
			<p className="dropzone__text">{isDragActive ? "Introduce..." : "Introduce las imágenes aquí"}</p>
		</div>
	)
}

export default MyDropzone