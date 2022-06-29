import React, { useState } from "react"
import { ToastContainer } from "react-toastify"

import { auth } from './utils/Firebase'
import Auth from "./pages/Auth"
import LoggedLayout from "./layouts/LoggedLayout"

const App = () => {

	const [user,      setUser]      = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [reloadApp, setReloadApp] = useState(false)
	const [course,    setCourse]    = useState(getSampleCourseOBJ())

	auth.onAuthStateChanged(currentUser => {
	
		if(!currentUser?.emailVerified) {
			auth.signOut()
			setUser(null)
		}
		else 
			setUser(currentUser)
	
		setIsLoading(false)
	})

	if(isLoading) 
		return null



	return (
		<div>
			{!user ? 
				<Auth/> 
			: 
				<LoggedLayout user={user} setReloadApp={setReloadApp} course={course}/>
			} 
			
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				puaseOnVisibilityChange
				draggable
				pauseOnHover={false}
			/>
		</div>
	)
}

const getSampleCourseOBJ = () => {
	const str = '{"title":"General Spanish U1","lessons":[{"title":"Lesson Uno","pdfURL":"https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Uno%2F0a8e95b3-78e0-4a47-abe7-efd0413dd599?alt=media&token=175d126a-4ef0-46a0-862a-f4093f1ca5f4","slides":["https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Uno%2Ff5c065ee-a2c2-4a7d-ae76-ef079286ffd2?alt=media&token=753d2e42-c902-4a3a-9253-cda835b5601f","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Uno%2Fff4e0620-be37-4053-a4bd-479eedadad68?alt=media&token=abf79ef2-7361-4a3f-b984-5f77c4eddfc5","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Uno%2Fbc615185-db04-494b-ad71-cd332b68d3f6?alt=media&token=2839dd46-84fa-4ea9-bd13-5755cea2cad6","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Uno%2F991d649a-c5d2-4d8c-ac81-991712e4ba9c?alt=media&token=47e094de-ad9a-4c61-8774-4bd8486961c8","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Uno%2F4c2f6abc-ec56-40db-b376-aadd0b74aecf?alt=media&token=0c792118-8743-4743-be43-7177a6dc26b6","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Uno%2F57c90685-ec0d-43d3-a17e-e0c14519ed3e?alt=media&token=5bcd83d9-56f2-4088-a96a-46fb53ac37f1","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Uno%2Ffde78d97-a7a5-4044-ba98-593b7d9c8369?alt=media&token=13ebd1f5-a131-44c9-9210-83d918af60a0","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Uno%2F04dbe14e-32b9-421a-9e1f-f0e484ba2c96?alt=media&token=961c3c6f-c1f0-4215-a25a-e6dee15846b5","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Uno%2F713eae02-5aa0-43b4-a7bd-fc81d1bb0338?alt=media&token=2ab39d45-ec75-4615-bf1c-d321eef31e9c","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Uno%2Fcec06545-2a37-4e59-b6dd-b8cdc3c866ce?alt=media&token=b3e3025f-1be5-4b20-b1e5-333a61c79cb9"]},{"title":"Lesson Dos","pdfURL":"","slides":["https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Dos%2Fcf2c3cc0-e54f-4815-b5c9-f056d1638e4c?alt=media&token=c78d5370-9096-4ccb-8216-2920958527f7","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Dos%2F6a7eab16-f735-4f60-90df-0f310ed14dda?alt=media&token=1c5e52a1-5fcb-46aa-b086-ec2e94c5b9d9","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Dos%2Fbbe0b814-97c3-43e7-86a7-eabb096f1027?alt=media&token=97dbb8d6-9470-4fb4-8851-4e526c6ca162","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Dos%2F5472b710-5eaa-4ab0-b5a4-aa8fee447962?alt=media&token=36c1054a-8c20-4efc-9cac-6bd5cad07236","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Dos%2Fe6053cf2-cb82-40d8-8056-2361d59fa10f?alt=media&token=8303e86b-04bc-478e-9f24-fa9d88654d9e","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Dos%2F29ee99b0-13d4-46f0-9949-1c2a0349ce4f?alt=media&token=51aa0cd1-c34e-48da-8541-f9949192d9c4","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Dos%2Fed4aa798-6670-4a7f-b51e-cf12d01b9832?alt=media&token=3f2b22de-363b-4797-9a13-494136916b86","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Dos%2Fcea8aa12-c83b-4272-bc05-2aac5a7fe405?alt=media&token=dc50cd45-e7c7-4405-852f-35018e67bc09","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Dos%2Ffecd707c-9e5f-456a-8fab-9c09f9858e03?alt=media&token=7075fc39-e149-4639-aaf3-8becd62f9911","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Dos%2F61d227c0-8eb8-4075-82a7-03e319b42536?alt=media&token=082a60e4-bdbc-4122-963a-552b56e9d0ff"]},{"title":"Lesson Tres","pdfURL":"https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Tres%2F37dc900d-c892-4fb5-ac4b-f9f5c4692e25?alt=media&token=668127b0-dd27-4351-a9b4-776036a3a20c","slides":["https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Tres%2Fe8617549-0f35-492b-bfd4-434b7caf7828?alt=media&token=9ffc5b2d-3b5b-4d15-98aa-e94705ff0931","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Tres%2F43ed8357-075c-4864-bf84-b0e92fc36c77?alt=media&token=12c2f411-791e-4554-afbc-f200d8948777","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Tres%2Fe36180c8-8306-4222-b9a5-e5d2b4a16af2?alt=media&token=8b93da82-c6ff-4431-a0af-ee4adf565666","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Tres%2F8448aa1e-c8c6-44f6-8ce6-dfbdb9286c9a?alt=media&token=793297d8-f41b-470d-b2a8-678547285084","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Tres%2Fe0b25d45-6b43-4e28-b2f6-22430e618b76?alt=media&token=123a0b46-bf86-48dc-925a-a7c5da8bf27f","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Tres%2F0f8b4a2b-6890-4300-a488-a8b2b0cc31cb?alt=media&token=97b8f8ec-1266-4862-92a3-d22c34f7d2cb","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Tres%2Fa98c095d-ac5b-4214-b874-0d68c7287075?alt=media&token=e6ffc683-b9e1-4cb8-afa1-d6ebf9450ff1","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Tres%2Fde5ef899-a839-4d66-a748-1220b46085cb?alt=media&token=52ef1d93-9c65-4620-96a9-76acc4d7de58","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Tres%2F76bc3408-15dd-4083-a6d2-9859b89e92bf?alt=media&token=7a271a78-e0d4-451c-ab22-fdbaac88fc02","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/noReference%2FLesson%20Tres%2F13832c31-5c2d-4eed-acec-4902ddb23865?alt=media&token=cb2d7402-d25a-4e7b-af3a-ae752dc73d96"]}],"tests":[{"title":"Test Uno","testObj":{"description":"Descripcion del formulario","questions":[{"label":900033430,"legend":"Texto de pregunta 1","text":null,"type":"radio","entry":2012342214,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":1269814561,"legend":"Texto de pregunta 2","text":null,"type":"radio","entry":1680131739,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":1668502319,"legend":"Texto de pregunta 3","text":null,"type":"radio","entry":2050221285,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":1477695776,"legend":"Texto de pregunta 4","text":null,"type":"radio","entry":1175588237,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":62433422,"legend":"Texto de pregunta 5","text":null,"type":"radio","entry":1102331706,"options":[["Opción 1",null,-2,null,0],["Opción 2",null,-2,null,0],["Opción 3",null,-2,null,0],["Opción 4",null,-2,null,0]]}],"title":"Titulo del formulario"},"answerLink":"https://docs.google.com/spreadsheets/d/1DdLJt4pOLWcnjsJ2QLF4-IZupp1rmwyPwRA_ZiXAjqA/edit?resourcekey#gid=274104357","responseURL":"https://docs.google.com/forms/d/e/1FAIpQLSf7lneO_rH5tFwm1WXu6kwt7aQMDmZNZgkTzILprcHq6Crznw/formResponse"},{"title":"Test Dos","testObj":{"description":"Este es el segundo test de la unidad","questions":[{"label":1648629953,"legend":"Hola ¿cómo te llamas?","text":null,"type":"text","entry":595604424,"options":null},{"label":1599676364,"legend":"Elige tres colores","text":null,"type":"checkbox","entry":361289088,"options":[["Rojo",null,null,null,0],["Verde",null,null,null,0],["Amarillo",null,null,null,0],["Azul",null,null,null,0],["Morado",null,null,null,0],["Negro",null,null,null,0],["Blanco",null,null,null,0]]},{"label":2111586835,"legend":"Menú desplegable","text":null,"type":"dropdown","entry":1185583174,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]}],"title":"Test 2"},"answerLink":"https://docs.google.com/spreadsheets/d/11wWGJk386dt9TTrhQVSpxFj7kwc-HSKGYg99E_BhATE/edit?resourcekey#gid=37922101","responseURL":"https://docs.google.com/forms/d/e/1FAIpQLScU8HEaqAgw406cX1lYTv7y7NGFnYoht_7HJqrtmc85xF1Jlg/formResponse"}],"videos":[{"key":"af","value":"jNQXAC9IVRw","text":"Me at the zoo"},{"key":"af","value":"XjtAY7HJ6gs","text":"Graduación 2022 Nebrija"}]}'
	return JSON.parse(str)
}


export default App