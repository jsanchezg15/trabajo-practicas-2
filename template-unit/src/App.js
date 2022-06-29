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
	const str = '{"title":"General Spanish Unit 1","lessons":[{"title":"Lesson 1","pdfURL":"https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%201%2Facc18fd8-d83f-4a4a-b43f-c937b9b81a1f?alt=media&token=408e772b-9908-40e4-8958-4d4f7f5f5a2c","slides":["https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%201%2F3ccd5675-9c52-485b-afeb-5b1a0b389d24?alt=media&token=6ecb7726-8d22-49cf-ba43-89d5a09e4312","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%201%2F0eda8606-ec4e-4b6b-8537-6164d4f39d26?alt=media&token=b208b8f3-f552-45ef-8730-4fb8c707743f","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%201%2Ff0e6fb04-1122-4397-9d5a-5028ae4dae6f?alt=media&token=5c7d50ed-fab8-4747-aa20-b91e63d3c79c","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%201%2F8fd80004-b44d-405e-96b5-342868ac3c1a?alt=media&token=6bffcba1-9bdd-4ce9-94d7-f707506d6bbf","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%201%2Faf7dc7b5-0168-43e8-90b5-058aa50707ef?alt=media&token=3fe54835-ff4e-48dd-a53d-0f20eac195a5","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%201%2F069e750e-f925-4ae2-a372-c0b0ec1077bc?alt=media&token=68de23c7-1254-4fc0-bb36-0c9d692d3ff9","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%201%2F25825a53-f833-4fdf-bcb6-04f08111a35b?alt=media&token=7b37d1e7-2914-4f3d-8813-a767afec7c16","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%201%2F73b70cc8-7f06-4655-b734-d92ad9b5ca30?alt=media&token=1d5213f5-b447-4bcf-a97d-712d1ad47e7d","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%201%2F70b0b88c-441e-4823-bf35-d0e54a8c941a?alt=media&token=f45f8574-b98f-440c-ac6b-1e46c474c328","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%201%2F52ccd4d9-c1bd-45f0-b783-c71304714c10?alt=media&token=f944033e-f299-44f0-ac33-9f68dcdefbb9"]},{"title":"Lesson 2","pdfURL":"","slides":["https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%202%2Fb13d2e5a-f6ea-4c66-853c-814e3a2b018a?alt=media&token=027c2b4b-9df4-4144-9508-d4f77887a189","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%202%2F36e3ed28-a980-4937-866b-d7f1f96583a6?alt=media&token=d6205763-a0e2-4113-9183-840da3328c90","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%202%2Fb7770064-710a-46de-8a94-b9cdee70d640?alt=media&token=e614eb44-1cff-41fe-a87f-86eb4cb60efc","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%202%2F57c31106-1fd3-48a5-8991-a31d29c0c5fc?alt=media&token=9af6b8ee-ad16-4d4c-89ea-3618d0eaec1a","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%202%2F65c8f827-6bde-49b1-a5b1-19b2b907be92?alt=media&token=70ada095-f7c2-43dc-9a7f-7d4147468b5f","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%202%2Fd96c4b60-660f-489f-ba01-39f8f61e62cd?alt=media&token=3182c670-d4ec-4c20-b434-2b60eac19323","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%202%2Faaf95b55-2607-4a4a-a165-fd262ba8d990?alt=media&token=265248a6-dc4f-4642-a834-0601685ea328","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%202%2Feb33215a-ec5f-4bd6-b2d6-43b7e04e39dd?alt=media&token=06307e62-a8d2-433f-b313-565d1e08afb2","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%202%2F69a72637-4641-4abd-b549-38cde355ab07?alt=media&token=de27c702-3f1a-4bc2-bd1c-f063209f3727","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%202%2Fb9bfb0bb-d414-45f2-bdce-2ffa243b3710?alt=media&token=7e48e31b-3751-443f-a191-8a46b6c87604"]},{"title":"Lesson 3","pdfURL":"https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%203%2F7340ea1b-d9e1-40f2-b153-6d6a54d98dd6?alt=media&token=8d06134a-76c5-4d3a-9404-a3444208a4e9","slides":["https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%203%2F5f4711ce-59ea-4b7a-a165-29d32b50dfc6?alt=media&token=61204b1c-0687-446c-8ecc-c1cf76b8efb4","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%203%2F14e64aa5-c09b-4afb-bdd7-c2c2391f4de5?alt=media&token=c46955b0-d03a-4c77-974d-2ea9e24f52f3","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%203%2F47e3e25b-b721-4aae-a016-8c5b9e4b04b8?alt=media&token=acb30a24-4c4e-4e1a-86a0-08e1f14b408c","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%203%2Fc2b5b111-8e2a-4e8c-aca3-7c473985afe8?alt=media&token=f94ab51d-f3df-4312-8571-02c5cd0f8ee0","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%203%2F753a7f50-d260-430c-8366-4c25642514c0?alt=media&token=ec9e8460-9f32-4177-b247-f486e9550be8","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%203%2F9e239ce7-66ee-40a7-b43a-2f36ae12cc68?alt=media&token=c8cb6ca5-5f77-4523-aca2-576ce409ff67","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%203%2F65bf8f6a-69f5-41b3-a59d-8477c8bb6c48?alt=media&token=35e1b505-5e4b-45dd-bcd9-9bd13bc8451d","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%203%2F921c165d-8b76-443a-be07-078a93519b2a?alt=media&token=c4f3f154-0928-48ca-90b2-d768651413f2","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%203%2F416dadbb-9526-4ddd-95fa-7012b9ff5006?alt=media&token=1f6ef24c-a581-43cc-8a21-81bfca2ba0ae","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/General%20Spanish%20Unit%201%2FLesson%203%2Fb1526778-9ad8-40e7-8111-d57405164b51?alt=media&token=44ebddac-9435-4eec-b317-f2fe7a75d086"]}],"tests":[{"title":"Test 1","testObj":{"description":"Descripcion del formulario","questions":[{"label":900033430,"legend":"Texto de pregunta 1","text":null,"type":"radio","entry":2012342214,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":1269814561,"legend":"Texto de pregunta 2","text":null,"type":"radio","entry":1680131739,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":1668502319,"legend":"Texto de pregunta 3","text":null,"type":"radio","entry":2050221285,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":1477695776,"legend":"Texto de pregunta 4","text":null,"type":"radio","entry":1175588237,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":62433422,"legend":"Texto de pregunta 5","text":null,"type":"radio","entry":1102331706,"options":[["Opción 1",null,-2,null,0],["Opción 2",null,-2,null,0],["Opción 3",null,-2,null,0],["Opción 4",null,-2,null,0]]}],"title":"Titulo del formulario"},"answerLink":"https://docs.google.com/spreadsheets/d/1DdLJt4pOLWcnjsJ2QLF4-IZupp1rmwyPwRA_ZiXAjqA/edit?resourcekey#gid=274104357","responseURL":"https://docs.google.com/forms/d/e/1FAIpQLSf7lneO_rH5tFwm1WXu6kwt7aQMDmZNZgkTzILprcHq6Crznw/formResponse"},{"title":"Test 2","testObj":{"description":"Este es el segundo test de la unidad","questions":[{"label":1648629953,"legend":"Hola ¿cómo te llamas?","text":null,"type":"text","entry":595604424,"options":null},{"label":1599676364,"legend":"Elige tres colores","text":null,"type":"checkbox","entry":361289088,"options":[["Rojo",null,null,null,0],["Verde",null,null,null,0],["Amarillo",null,null,null,0],["Azul",null,null,null,0],["Morado",null,null,null,0],["Negro",null,null,null,0],["Blanco",null,null,null,0]]},{"label":2111586835,"legend":"Menú desplegable","text":null,"type":"dropdown","entry":1185583174,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]}],"title":"Test 2"},"answerLink":"https://docs.google.com/spreadsheets/d/11wWGJk386dt9TTrhQVSpxFj7kwc-HSKGYg99E_BhATE/edit?resourcekey#gid=37922101","responseURL":"https://docs.google.com/forms/d/e/1FAIpQLScU8HEaqAgw406cX1lYTv7y7NGFnYoht_7HJqrtmc85xF1Jlg/formResponse"}],"videos":[{"key":"af","value":"jNQXAC9IVRw","text":"Me at the zoo"},{"key":"af","value":"XjtAY7HJ6gs","text":"Nebrija Graduación 2022"}]}'
	return JSON.parse(str)
}


export default App