import React, { useState } from "react"
import { ToastContainer } from "react-toastify"

import { auth } from './utils/Firebase'
import Auth from "./pages/Auth"
import LoggedLayout from "./layouts/LoggedLayout"

const App = (props) => {

	const [course, setCourse] = useState( JSON.parse( props.course || getSampleCourseOBJ() ) )


	const [user,      setUser]      = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [reloadApp, setReloadApp] = useState(false)

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
	return '{"title":"Entrega de Prácticas Final","lessons":[{"title":"Los números","pdfURL":"https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20n%C3%BAmeros%2Fb0a9085a-454c-4568-844f-f9b014046bbe?alt=media&token=03e1de3c-3288-4069-ad06-0a39d2bb7804","slides":["https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20n%C3%BAmeros%2Fc6f11db8-2f5d-41cf-8012-6dcc4e376022?alt=media&token=14e34f29-e44d-4d53-9373-3368b11a897c","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20n%C3%BAmeros%2Fa24478a8-c612-47c2-8cae-b771c00e61bf?alt=media&token=6cc151cb-835a-43ac-ac7f-f79cedf6116a","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20n%C3%BAmeros%2F06b0fbae-4de7-4884-9aef-125024482350?alt=media&token=4bcf86af-d755-4167-a800-29b3ab91b409","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20n%C3%BAmeros%2F3db8c357-6244-456f-9455-44d02d5743fe?alt=media&token=046da787-675d-4867-ab6d-d240b8314f2f","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20n%C3%BAmeros%2Fc907a4e7-fde3-4628-96ec-884e42eb92a4?alt=media&token=221b3cf7-9887-40bd-ad0e-c832149b4077","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20n%C3%BAmeros%2Fb4c4ab6b-d4f3-49cc-a3b8-40062da689ee?alt=media&token=6a772696-4484-4dd2-97cc-23f399162b68","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20n%C3%BAmeros%2F3e0f04a9-bfdd-4c06-a0bb-da369ecc67ed?alt=media&token=4b723532-ce61-44d3-9127-cb3ef760bc7f","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20n%C3%BAmeros%2F56809260-9972-4936-afb0-ac9b8c8e8af3?alt=media&token=69ce328b-68f4-4a4a-9c60-83b6926fcf50","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20n%C3%BAmeros%2F258e066c-3062-4096-a6d9-47103e2aa31c?alt=media&token=e675f77d-01ec-4bde-8cdd-cc11dcac214f","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20n%C3%BAmeros%2F8c5cee51-2b9f-46c4-a297-c58174dd2391?alt=media&token=a5d38387-6e33-44c3-a66b-b5b16e18c459"]},{"title":"Los colores","pdfURL":"","slides":["https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20colores%2Faad55db5-2ba4-47c3-b4f5-a2881e02a2e3?alt=media&token=54bb4a38-36bb-4165-bcef-2d10354c0b0d","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20colores%2F617f0e07-cf36-49f7-9861-3540307e4212?alt=media&token=c26bc927-69ba-4160-b71c-102a5fd2ed3b","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20colores%2F547a004e-80c2-410a-8339-db93c10b0df3?alt=media&token=525785a6-2708-44d6-b3ac-239d04bcb9ca","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20colores%2F7699ee4b-74a4-42af-bd25-3c6befd5fef2?alt=media&token=c8fa8676-5606-4f02-b726-b1cea8d9a7a6","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20colores%2Fb567933f-0765-49cb-8472-b650e7ab3b26?alt=media&token=312eb989-17fe-4171-a464-97da38d066ab","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20colores%2Fd43b7b80-a597-47f0-afc2-9c8c2c5e551c?alt=media&token=d95bc169-60a7-4b54-aa70-d9e2e0b0df97","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20colores%2F673378b7-1dcb-433f-b2e6-e57e2d247d2b?alt=media&token=d1501462-7785-47ff-9669-849ae9a5f89e","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20colores%2Fba94feac-6c6e-4cf8-af9e-3bbe735f3e5d?alt=media&token=2f42447f-fb71-4c9c-b920-c1a1d4f3715e","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20colores%2F32de60de-d63d-4c35-a029-c7f9a9f77ab6?alt=media&token=20a0039e-cdd4-4767-bc22-1aa598661961","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20colores%2Fe142c4a5-1d0a-45ad-8274-4937133ae969?alt=media&token=959de637-096a-4668-81f7-eab49e39a158"]},{"title":"Los animales","pdfURL":"https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20animales%2F59bb0ace-226a-4b3d-bc1f-15914809846e?alt=media&token=afb934f7-5594-4d1f-9680-a2d3c2e9443c","slides":["https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20animales%2F6a8103e9-e0b2-4a87-b434-fffb90a1b7c7?alt=media&token=c6daf0af-9b99-4b35-b4f7-c55652725563","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20animales%2F2bbc80d7-e5c4-4aa1-b6a9-3d660afc0d0c?alt=media&token=e571239e-1c9c-4ca7-9420-f5c547038a3f","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20animales%2F422685f5-8441-469e-a4db-60a8107a2a36?alt=media&token=2f24caef-e995-475e-a78d-955e62cc34e6","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20animales%2F4fb427f9-2f53-4326-a259-68b63f309852?alt=media&token=202e4295-09a9-4a8e-bfc5-d08664787497","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20animales%2F35186e13-157c-4ea3-9a30-d6ce942d5084?alt=media&token=ff338141-92e0-4c1d-ae86-d12b1f5d324c","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20animales%2F6f86099e-c1d1-4116-b233-c976f60aef35?alt=media&token=0894d7be-4ef5-42dc-9203-04bd5c0447c2","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20animales%2Fa444e7d1-c8ef-4252-92cf-8e515ca24507?alt=media&token=b802252e-0356-468c-97a9-e7d9288a6792","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20animales%2F623a2e9d-343e-4eb3-8af6-1722131344b3?alt=media&token=c769736e-eb38-44ba-bf10-2b5d6d7d37a8","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20animales%2Fee576323-5aab-45d5-85f3-266d58789bc7?alt=media&token=9ba96372-53a4-4a97-9ed4-279914d1ebea","https://firebasestorage.googleapis.com/v0/b/practicas-58334.appspot.com/o/Entrega%20de%20Pr%C3%A1cticas%20Final%2FLos%20animales%2F7ccb6fd8-8a19-4fcd-a8ba-5fb8fbdaa661?alt=media&token=df5f2d36-7397-42b1-afcc-4350a988e2d7"]}],"tests":[{"title":"Test 1","testObj":{"description":"Descripcion del formulario","questions":[{"label":900033430,"legend":"Texto de pregunta 1","text":null,"type":"radio","entry":2012342214,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":1269814561,"legend":"Texto de pregunta 2","text":null,"type":"radio","entry":1680131739,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":1668502319,"legend":"Texto de pregunta 3","text":null,"type":"radio","entry":2050221285,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":1477695776,"legend":"Texto de pregunta 4","text":null,"type":"radio","entry":1175588237,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":62433422,"legend":"Texto de pregunta 5","text":null,"type":"radio","entry":1102331706,"options":[["Opción 1",null,-2,null,0],["Opción 2",null,-2,null,0],["Opción 3",null,-2,null,0],["Opción 4",null,-2,null,0]]}],"title":"Titulo del formulario"},"answerLink":"https://docs.google.com/spreadsheets/d/1DdLJt4pOLWcnjsJ2QLF4-IZupp1rmwyPwRA_ZiXAjqA/edit?resourcekey#gid=274104357","responseURL":"https://docs.google.com/forms/d/e/1FAIpQLSf7lneO_rH5tFwm1WXu6kwt7aQMDmZNZgkTzILprcHq6Crznw/formResponse"},{"title":"Test 2","testObj":{"description":"Este es el segundo test de la unidad","questions":[{"label":1648629953,"legend":"Hola ¿cómo te llamas?","text":null,"type":"text","entry":595604424,"options":null},{"label":1599676364,"legend":"Elige un color","text":null,"type":"checkbox","entry":361289088,"options":[["Rojo",null,null,null,0],["Verde",null,null,null,0],["Amarillo",null,null,null,0],["Azul",null,null,null,0],["Morado",null,null,null,0],["Negro",null,null,null,0],["Blanco",null,null,null,0]]},{"label":2111586835,"legend":"Menú desplegable","text":null,"type":"dropdown","entry":1185583174,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]}],"title":"Test 2"},"answerLink":"https://docs.google.com/spreadsheets/d/11wWGJk386dt9TTrhQVSpxFj7kwc-HSKGYg99E_BhATE/edit?resourcekey#gid=37922101","responseURL":"https://docs.google.com/forms/d/e/1FAIpQLScU8HEaqAgw406cX1lYTv7y7NGFnYoht_7HJqrtmc85xF1Jlg/formResponse"}],"videos":[{"key":"af","value":"rMTbCZ747FU","text":"Bienvenido a Nebrija"},{"key":"af","value":"XjtAY7HJ6gs","text":"Graduación Nebrija 2022"}]}'
}


export default App