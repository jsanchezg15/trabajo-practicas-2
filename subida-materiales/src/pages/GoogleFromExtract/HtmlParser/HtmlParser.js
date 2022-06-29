import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import { db } from '../../utils/Firebase'


// Styles
import 'semantic-ui-css/semantic.min.css';

toast.configure()

const getHTML = async (myUrl) => {
	try {
		// Asks the API REST for the HTML of the google form
		// whose url has been introduced in the input text
		// The url is send in the headers
	
		console.log(1)

		const HOST =  process.env.HOST || "http://localhost:8080"

		const resp = await fetch(HOST + "/getHtml", {headers: {url: myUrl}})
		console.log(2)

		const data = await resp.json()
		console.log(3)


		if(resp.status === 500) 
			throw {message: "Internal server error"}
		
		console.log(4)

		const publicLoadData = getPublicLoadData(data)
		console.log(5)

		let description = publicLoadData[0]
		console.log(6)

		let questions   = publicLoadData[1]
		console.log(7)

		let title       = publicLoadData[8] || extractTitle(data)
		console.log(8)

		questions = questions.map(quest => {
			return {
				label:   quest[0],
				legend:  quest[1],
				text:    quest[2],
				type:    getType(quest[3]),
				entry:   quest[4] ? quest[4][0][0] : "",
				options: quest[4] ? quest[4][0][1] : ""
			}
		})
		console.log(9)

		console.log({description, questions, title})

		await db.collection("tests").add({json: JSON.stringify({description, questions, title})})
		console.log(10)

		return {
			description, 
			questions, 
			title
		}
	}	
	catch(e) {
		console.log(e)
		toast.error("ERROR: " + (e.message || "something went wrong..."))
	}
}

const getPublicLoadData = (str) => {
	console.log(str)
	try {
		const dataArray = str.split('var FB_PUBLIC_LOAD_DATA_ = ')[1].split(';')
		dataArray.pop()
			
		const data = dataArray.join(";")
		const json = JSON.parse(data)[1]

		return json
	}
	catch(e) {
		throw {message: "something happened while getting public load data"}
	}
}

const extractTitle = (str) => {
	try {
		let title = str.split("freebirdFormviewerViewHeaderTitle exportFormTitle freebirdCustomFont")[1]
		title = title.split(">")[1]
		title = title.split("<")[0]
		return title
	}
	catch (e) {
		console.error(e)
		toast.error(e)
		return "A11U4L1"
	}
}

const getType = (num) => {
	switch(num) {
		case 0:
			return "text"
		case 1:
			return "paragraph"
		case 2:
			return "radio"
		case 3:
			return "dropdown"
		case 4:
			return "checkbox"
		case 6:
			return "reading_text"
		default:
			return "ERROR_TYPE"
	}
}

const createUrl = (myUrl) => {
	const arr = myUrl.split("/")
	arr[arr.length - 1] = "formResponse"
	return arr.join("/")
}


export default getHTML
