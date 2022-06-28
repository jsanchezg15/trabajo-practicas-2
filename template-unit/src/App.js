import React, { useState } from "react"
import { ToastContainer } from "react-toastify"

import { auth } from './utils/Firebase'
import Auth from "./pages/Auth"
import LoggedLayout from "./layouts/LoggedLayout"

const App = () => {

	const [user,      setUser]      = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [reloadApp, setReloadApp] = useState(false)
	const [course,    setCourse]    = useState(getSampleCourse())

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

const getSampleCourse = () => {
	return {
		title: "General Spanish",
		lessons: [
			{
				title:  "Lesson 1",
				pdfURL: "https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2FA11U2L1REF.pdf?alt=media&token=5a9a1fca-2f23-44c4-af94-2c3b38849a0f",
				slides: [
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-0.jpg?alt=media&token=50248171-0ee1-44dd-b75f-b7fbdd020b77',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-1.jpg?alt=media&token=7684e5b7-8e9a-4c4e-8387-4c47e7145ee9',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-2.jpg?alt=media&token=ceae38a3-fa2b-496d-a7d9-402d045fe42a',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-3.jpg?alt=media&token=db33f81d-3fe5-4a45-b3b8-79978181f28a',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-4.jpg?alt=media&token=920fc495-b309-48dc-bbe7-8dc9dbdcf41b',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-5.jpg?alt=media&token=027b25be-1ea5-4d6b-a23e-ddce66531e1f',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-6.jpg?alt=media&token=39e0090d-47fc-4b2a-8886-37dcfb972f4b',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-7.jpg?alt=media&token=b64905fb-a179-44f8-8b02-36669bd08bad',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-8.jpg?alt=media&token=bbfba83d-b7a0-473c-9da5-0897f300125a',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-9.jpg?alt=media&token=fc36ebe5-ab67-45e0-93aa-c61b6ef0c630',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-10.jpg?alt=media&token=9fceaf6b-757f-4915-b157-3ae4a61781c5',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-11.jpg?alt=media&token=263a443a-93df-4b96-9295-a68bcb8f1d24',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-12.jpg?alt=media&token=5f31395b-0062-4c1b-85bb-9bb50eb0b2d4',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-13.jpg?alt=media&token=45c3e381-7127-4799-bb2a-5db512d52018',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-14.jpg?alt=media&token=904df325-9c63-4de5-8d5d-be3c31a50163',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-15.jpg?alt=media&token=00beb855-1765-436b-8299-9dbd12e6be05',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-16.jpg?alt=media&token=b3c615bc-1f8a-4cfa-9305-f62d185f1844',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-17.jpg?alt=media&token=ee248b53-37c0-4111-a431-209ac8387683',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-18.jpg?alt=media&token=baa4b2b1-e722-4d6c-b6d2-800f12bdfa56',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-19.jpg?alt=media&token=849e26d2-6c87-4df8-8036-bf315865200c',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-20.jpg?alt=media&token=3819641e-9b78-46ad-afbe-58d58353ea85',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-21.jpg?alt=media&token=484075fc-230a-4bbf-9887-44e661ecb250',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-22.jpg?alt=media&token=251a10ea-04a3-47f2-99c8-ce8c719a6d57',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-23.jpg?alt=media&token=5bab79a9-d407-435b-8d78-b79579283939',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-24.jpg?alt=media&token=71253413-77e2-47b0-91d3-dd6477546720',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-25.jpg?alt=media&token=799a0dc2-d394-4c57-b4c5-980cd0292018',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-26.jpg?alt=media&token=a6128280-a836-4390-bf75-b7bd25689495',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-27.jpg?alt=media&token=188056ca-db2a-4cee-8dea-5eb56368e6da',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-28.jpg?alt=media&token=1e5a6a8a-0411-46fd-8a31-637617d804a0',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-29.jpg?alt=media&token=b66540ab-6564-4048-bedf-bb1e822d6411',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-30.jpg?alt=media&token=9c7ac0a2-b8ab-46f4-9d08-aeb4d5e7d144',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-31.jpg?alt=media&token=78e0b3f2-fdc8-4c69-9399-89c700a366f7',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-32.jpg?alt=media&token=773bfdb7-5d28-41bc-a6d9-26f480e24c96',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-33.jpg?alt=media&token=6e79f15c-71c8-45b8-9445-8cdc99ade5f8',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-34.jpg?alt=media&token=9d185855-1254-4367-99e4-05bcb99273a3',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-35.jpg?alt=media&token=7321f83c-4d0c-4ee9-8c85-9f36edcd36da',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-36.jpg?alt=media&token=8fd134c6-62d4-4a08-9ab5-25458e51bbc6',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-37.jpg?alt=media&token=5887f58b-6b2d-4dce-91ca-615da361c973',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-38.jpg?alt=media&token=c5129f4d-380b-4dd2-8082-b72ff32883cd',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-39.jpg?alt=media&token=415f1ccf-50b8-4670-be85-1e5ba51d3713',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-40.jpg?alt=media&token=305aff79-faa0-4b6c-bd5a-0040265f288a',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-41.jpg?alt=media&token=04a47c39-26ee-4ba2-803a-4786e2e166f0',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-42.jpg?alt=media&token=42cd157b-7ceb-440a-8669-a09b1d4c5647',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L1%2Fec68ae5517c76659f849ea79a7610587-43.jpg?alt=media&token=1bee82e2-f300-45f3-9bff-8eece707a997'
				]
			},
			{
				title:  "Lesson 2",
				pdfURL: "https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2FA11U2L2REF.pdf?alt=media&token=565bd2c8-a462-4691-8bb1-62848895ee76",
				slides: [
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-0.jpg?alt=media&token=e21d43d6-d8d6-4f35-a6b3-1ec6a5661d40',          
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-1.jpg?alt=media&token=65dfe22f-f7b5-4fe1-b06e-7f64d38640ae',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-2.jpg?alt=media&token=2ab8cd43-6caa-4d60-beff-5f337dbf981a',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-3.jpg?alt=media&token=560970e8-59f2-4546-9c91-90e10e39714e',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-4.jpg?alt=media&token=728f89da-7352-4a13-b317-0dc06eb092ee',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-5.jpg?alt=media&token=2c61ed77-fec0-41a7-87c9-8711290d9f66',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-6.jpg?alt=media&token=2b5f704c-5f80-4045-b08d-2ccc20619580',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-7.jpg?alt=media&token=b105ef44-862d-4e2d-adb4-27f1428d498d',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-8.jpg?alt=media&token=b0cbef81-44c9-427e-8c71-133a0fbbbb7c',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-9.jpg?alt=media&token=39967a55-8801-4be8-868e-5b4dface646f',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-10.jpg?alt=media&token=713a5a04-86d3-4ca8-8f3b-eeb510c53bcc',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-11.jpg?alt=media&token=6749bf35-6c37-4bbb-9ae6-a116c1b9d17c',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-12.jpg?alt=media&token=1d38ff93-469f-4376-88a1-69be80823530',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-13.jpg?alt=media&token=32850bce-d5c0-4591-9088-6fe5712f4c27',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-14.jpg?alt=media&token=072ba199-27bc-4b40-81fc-2ffa2e7a0c6b',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-15.jpg?alt=media&token=11493d58-89a5-42ee-9e6c-d9f2875f6b89',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-16.jpg?alt=media&token=b4c67049-975c-4dc2-9643-8fd510f0553b',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-17.jpg?alt=media&token=51840ae4-178e-4529-aa56-8eda6a61f05e',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-18.jpg?alt=media&token=400dddf8-ea29-441b-9ad9-f724c7cce895',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-19.jpg?alt=media&token=cce58dbe-dfb6-442b-8897-9d45953a7ba0',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-20.jpg?alt=media&token=de6a544b-9e5d-49b1-80ea-eebbafbd1f2e',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-21.jpg?alt=media&token=f177160b-4816-4f92-8b40-b798ee05adf8',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-22.jpg?alt=media&token=4ec26cca-a4b7-456b-8940-9e220a45fd30',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-23.jpg?alt=media&token=43c83526-d079-4749-bd3f-cc60427c5f50',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-24.jpg?alt=media&token=b1670a29-1a62-4f17-83ad-3ed52eac508d',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-25.jpg?alt=media&token=1957a31b-ceac-40ce-b71d-41b87ebbaf66',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-26.jpg?alt=media&token=28bddaca-b3a5-4f00-b031-f418157193b7',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-27.jpg?alt=media&token=7d5b6d36-b463-4c27-b34f-b1764bc89294',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-28.jpg?alt=media&token=d95bc769-ada1-44b9-8513-faeda7a31c4d',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-29.jpg?alt=media&token=1a59d200-6e70-44b7-a2e6-3a8dfc69b007',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-30.jpg?alt=media&token=34fddab0-e212-4280-8432-c6605e9738b9',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-31.jpg?alt=media&token=405c689b-a387-4f06-b0c9-5592f9207b1e',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-32.jpg?alt=media&token=98b98bf3-40bc-447b-8a01-3b1c6d1439b3',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-33.jpg?alt=media&token=18946275-9881-4495-9ac1-9e5f514610b4',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-34.jpg?alt=media&token=b2192692-8b39-4f1b-bbf4-93f93843b991',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-35.jpg?alt=media&token=cdaeee9e-3927-4e51-a547-932125d3cbe5',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-36.jpg?alt=media&token=ba7402c2-91f1-47a1-a396-d41c175dab26',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-37.jpg?alt=media&token=c722961b-ee73-49b7-8d00-7cada259ae15',
				'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L2%2F20c8b46ae24a38dc8d9d5fd84861a161-38.jpg?alt=media&token=f5a0c05e-0a53-4125-8f10-80f6504f1800',
				]
			},
			{
				title:  "Lesson 3",
				slides: [
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-0.jpg?alt=media&token=c0565299-8441-4f2f-a8fd-3f71f91cebe6',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-1.jpg?alt=media&token=775352cb-9016-42ec-be73-68d90e443f98',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-2.jpg?alt=media&token=e4c184ac-d8bd-4a14-ac4d-f70f0ba586b8',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-3.jpg?alt=media&token=bf826af0-4d97-4a31-ab4a-c3add3057cac',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-4.jpg?alt=media&token=775f894f-aa05-4c2d-a0d5-404f39791cb2',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-5.jpg?alt=media&token=ef3972aa-1077-4629-9b5e-77a4ae486a01',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-6.jpg?alt=media&token=01ab76bb-9e9b-4ece-988d-4211a4013dbd',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-7.jpg?alt=media&token=d5657837-3d4c-411a-b6dc-1a825012eb0c',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-8.jpg?alt=media&token=f20e35f0-c238-4693-9105-e3d985b5606c',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-9.jpg?alt=media&token=b9fa6b8d-ed3b-4f6c-a77e-aac3a51568a2',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-10.jpg?alt=media&token=40565265-b206-471f-96bf-8e0d854f0f86',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-11.jpg?alt=media&token=2b440aa1-9132-429a-ab9c-b99904095de4',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-12.jpg?alt=media&token=32f7fcb9-dd1c-481b-926d-167a156caa8a',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-13.jpg?alt=media&token=b651574e-69cc-46b6-bf2e-42922aec2b36',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-14.jpg?alt=media&token=ac4d933e-78b9-472e-b029-926f2a861164',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-15.jpg?alt=media&token=559d503e-e3af-4eca-83b9-76a66f135a1f',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-16.jpg?alt=media&token=91616c25-a318-4a75-84fe-fbe746dcb256',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-17.jpg?alt=media&token=37a5f9a7-567e-476e-b332-298ea0d1b836',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-18.jpg?alt=media&token=c387c09a-63e6-4193-8aa7-29846f1bff09',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-19.jpg?alt=media&token=9400966d-84fe-4f62-a6d0-22ce60a75dab',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-20.jpg?alt=media&token=24dcce7b-ee6a-42b0-993c-95ad3b28e451',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-21.jpg?alt=media&token=b4fbdde4-431d-48b0-a92c-428e6fb4f890',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-22.jpg?alt=media&token=aa2ab223-30a6-4f16-af65-78a5cd5e7d9c',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-23.jpg?alt=media&token=74cfba35-cfb9-4cc0-8bf6-97051fcf4de9',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-24.jpg?alt=media&token=feb6316d-80a5-4d4a-96fa-78a340ef2f04',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-25.jpg?alt=media&token=9f56f7d4-7026-42c4-8228-d02dc6f98719',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-26.jpg?alt=media&token=40fbeb83-08f3-4ba9-be60-7469131be1dc',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-27.jpg?alt=media&token=e2f901e9-bcf4-4c47-af74-bdae17f9946d',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-28.jpg?alt=media&token=59610882-2e65-4458-9aa7-13732c7b849f',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-29.jpg?alt=media&token=acf4ed5f-faef-405a-8c5c-108a15215dcd',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-30.jpg?alt=media&token=aef2db2f-cb90-4b36-a501-e25fc7613f86',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-31.jpg?alt=media&token=a8f80d6e-3dc8-4c2c-8c41-d8f04c694781',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-32.jpg?alt=media&token=e3986b9a-c9c1-4d3d-89bc-2fdf3695092b',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-33.jpg?alt=media&token=c8a9228f-1752-4044-abe2-818588d09ec7',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-34.jpg?alt=media&token=9226b7a4-9f56-457b-9597-033d508b54bc',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-35.jpg?alt=media&token=08756d4c-a0d7-42dd-b399-f446da55d50a',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-36.jpg?alt=media&token=62a7e9e0-1ba8-4fe1-b1d3-7735f1c7cfa9',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-37.jpg?alt=media&token=518f7230-2aaf-40ce-8c7e-dd97ea0e3401',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-38.jpg?alt=media&token=7ea6a090-34ee-4dcd-b93d-f8c6b09a1dd1',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L3%2Fb8bc15e4c557cca5904e57f92c4a75dc-39.jpg?alt=media&token=90edce68-cbeb-4886-ad29-2b752e1e598d',
				]
			},
			{
				title:  "Lesson 4",
				pdfURL: "https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2FA11U2L4MAT.pdf?alt=media&token=d987e81f-67fc-4beb-85f4-e048ee9203ca",
				slides: [
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-0.jpg?alt=media&token=ddf45742-f8f5-4d14-9136-32eea6c21917',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-1.jpg?alt=media&token=54802e6e-8050-4de7-bf75-bd2cf3f348de',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-2.jpg?alt=media&token=c962af1c-6e86-454e-967e-71b51e7169c5',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-3.jpg?alt=media&token=b71948cb-4392-43d3-b7af-3db0551d43b7',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-4.jpg?alt=media&token=bb333293-ecc3-4259-b0a8-376c8ee9322f',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-5.jpg?alt=media&token=7c335981-d9cf-45a6-aa7f-06c46ac62509',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-6.jpg?alt=media&token=c9370073-2e49-4084-b4a5-6b927c9650b9',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-7.jpg?alt=media&token=3996545d-2059-4e3b-bd45-51a1da0f0894',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-8.jpg?alt=media&token=368581e6-369a-44d0-85ff-7ded1c2e81e6',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-9.jpg?alt=media&token=6c2d16e6-7701-4273-ab9d-1583eeaceef6',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-10.jpg?alt=media&token=4a204e1c-004e-4254-b93f-eccb72d7aa1d',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-11.jpg?alt=media&token=b469bf0d-12c8-459c-a1f6-851fbb772f50',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-12.jpg?alt=media&token=d559c695-ab37-4133-9db6-50e6f833addd',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-13.jpg?alt=media&token=00e0e7fa-68b3-4955-983d-19c9b0b60644',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-14.jpg?alt=media&token=6728941a-9359-4280-8a8a-1b096c98d53d',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-15.jpg?alt=media&token=e9eeeb8d-cc20-45f9-8c33-13a3cfa08be2',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-16.jpg?alt=media&token=d6eda8e5-2a89-4586-b7bd-bc733747b6c1',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-17.jpg?alt=media&token=308433e1-f779-4f48-a25e-68fbde41ce96',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-18.jpg?alt=media&token=0da1025a-bf69-4bc6-8b2f-91d0da3e5877',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-19.jpg?alt=media&token=00405b9a-0c14-456c-af4a-20f563a5468e',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-20.jpg?alt=media&token=fddd5d33-0c1b-480b-a733-de9511018359',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-21.jpg?alt=media&token=c39fe6f9-108f-4d1b-bc87-b59445479bc4',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-22.jpg?alt=media&token=76597600-c44e-4122-82f4-88b34457d81e',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-23.jpg?alt=media&token=547e34d5-9c42-4860-8200-7cd73bd30741',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-24.jpg?alt=media&token=25ea2751-cd7f-450c-908d-846b1b5443b5',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-25.jpg?alt=media&token=9e73354b-6ca3-4d21-932b-6e5075717833',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-26.jpg?alt=media&token=c9f01b9a-f719-4b44-aae4-07d4a1ad92ef',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-27.jpg?alt=media&token=8b69e126-e0d4-4305-8bcd-cf5338e6bc28',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-28.jpg?alt=media&token=67fbd185-592e-4149-b719-f7c67a18e8e1',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-29.jpg?alt=media&token=7b7efa2d-d3e3-412a-aff4-a8335042d4fe',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-30.jpg?alt=media&token=f9db54ee-b98a-428a-bb8f-7772b7d0b995',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-31.jpg?alt=media&token=3a5e1eda-4b06-44c3-acd1-b64252142f31',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-32.jpg?alt=media&token=d793b48e-809a-4a6d-b6ff-603106e50a65',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-33.jpg?alt=media&token=025eb2f3-9426-4666-868c-c69834bc6123',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-34.jpg?alt=media&token=37d0cdfb-5a39-4e57-ac88-65acd03e1f57',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-35.jpg?alt=media&token=ff16944f-fc73-4a98-bef8-bcf564fd7fe5',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-36.jpg?alt=media&token=8dbaed0e-9bce-4184-bbee-9d95c79a2178',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-37.jpg?alt=media&token=e452cbe0-9c7e-41a1-bfee-e43651e842fa',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-38.jpg?alt=media&token=b1c5ca13-6696-41b8-9cc9-3e116b34ac47',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-39.jpg?alt=media&token=dc0b7c04-f3cc-4844-9300-d8762d8d3818',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L4%2Fc8f336b6eee6efe3afca007d6d5f790c-40.jpg?alt=media&token=7bf4883d-92f9-40e1-a6a3-a90d345c3345',
				]
			},
			{
				title:  "Lesson 5",
				slides: [
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-0.jpg?alt=media&token=eb3f83d5-ebd0-463e-b38a-edcf4e058b59',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-1.jpg?alt=media&token=6952b249-b2ad-40be-9a4d-98e2aa94e8cd',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-2.jpg?alt=media&token=3523ff4c-84b7-45fc-ae41-19489f177306',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-3.jpg?alt=media&token=98a79382-51ba-4377-ac2b-1cc43dba70fb',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-4.jpg?alt=media&token=1b375bf6-f5a1-4127-adf5-310aecab9ed8',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-5.jpg?alt=media&token=747d98bb-16e7-4410-aa1a-19e84ba57b0e',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-6.jpg?alt=media&token=dcfdf3af-7764-46a7-b7ea-ba23dc8279ed',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-7.jpg?alt=media&token=3cb8fa2b-b692-4415-916a-4b3264bd183d',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-8.jpg?alt=media&token=a97c4e15-9c82-4058-8dde-1b8f2b799cd3',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-9.jpg?alt=media&token=fc8d3d0f-d802-49fe-ad69-e948cedda00b',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-10.jpg?alt=media&token=1401b87c-a41d-49ea-8d36-ec971f64766e',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-11.jpg?alt=media&token=fa17f224-5e59-4c11-9aa7-b2afee00d45d',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-12.jpg?alt=media&token=6e2adfb0-dd65-4fc7-ab1a-0fa827b86aa4',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-13.jpg?alt=media&token=fb9792ae-0ce9-4dbd-b1c4-c4a70ff349c0',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-14.jpg?alt=media&token=0af99b81-b01f-49aa-9f75-76ff4d421138',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-15.jpg?alt=media&token=4dd5708f-c0e9-42da-8172-0f1e57abf9d6',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-16.jpg?alt=media&token=16a94218-b8f0-47ef-804a-cc0d6b26297d',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-17.jpg?alt=media&token=e406d18e-bb0d-4fd0-8948-cd0c926b5688',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-18.jpg?alt=media&token=cb97a2ca-b12d-49a1-a989-3766352db201',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-19.jpg?alt=media&token=4e59cbef-8c12-4ca1-9e65-d7172c5ed9eb',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-20.jpg?alt=media&token=97204442-c68d-4d12-90b7-c361c20e8f30',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-21.jpg?alt=media&token=149f0561-45dc-4bfd-a962-5efff40902bb',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-22.jpg?alt=media&token=21d8381e-bca9-4ae9-af28-588b6369a4ba',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-23.jpg?alt=media&token=0d3cf3f1-ad2c-489a-b637-4277a2dc97c9',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-24.jpg?alt=media&token=18e9639f-eea3-4289-a1eb-e6806f6a0b9a',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-25.jpg?alt=media&token=e96185a4-a241-4392-917e-bdbcfdbf44a4',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-26.jpg?alt=media&token=738f8674-8a70-4759-980c-ed952be8a18b',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-27.jpg?alt=media&token=7bb6022c-e739-480c-86f8-c26dddb84002',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-28.jpg?alt=media&token=fb308dd8-4151-4403-abb5-d17bba8d53d5',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-29.jpg?alt=media&token=2fd19d2c-c105-465a-8bf7-3dfdbfed42c5',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-30.jpg?alt=media&token=7af780ad-1e4b-45df-b30b-b2bbf2b04a59',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-31.jpg?alt=media&token=a0a4088f-cba6-4a02-b87c-7fe544267a2e',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-32.jpg?alt=media&token=0d597577-4b2d-4bd6-9eff-a77a44a3154c',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-33.jpg?alt=media&token=65f55531-e2b2-418e-8b88-e777a2c99b47',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-34.jpg?alt=media&token=4d35b73b-d828-4021-9a3a-5dbb924bbd12',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-35.jpg?alt=media&token=da4a4e71-d5b0-45f1-8a07-9f4c8a629541',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-36.jpg?alt=media&token=da3dffb7-48bf-4268-94e6-c4e6289ee682',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-37.jpg?alt=media&token=b7c559f6-2b75-4196-9d6a-93baebab4ebe',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-38.jpg?alt=media&token=5583cf07-18e3-474e-8da3-d3b0ee8ad289',
					'https://firebasestorage.googleapis.com/v0/b/general-spanish.appspot.com/o/A1.1%2FA1.1%20Unit%202%2FA1.1%20Unit%202%20L5%2Fc5373f1f6ca64bb3229caa210cb0420a-39.jpg?alt=media&token=3aec97e0-aa4b-4cca-9298-91774681cddb',
				]
			}
		], 
		tests: [
			{
				title: 'Test 1',
				testStr: '{"description":"Descripcion del formulario","questions":[{"label":900033430,"legend":"Texto de pregunta 1","text":null,"type":"radio","entry":2012342214,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":1269814561,"legend":"Texto de pregunta 2","text":null,"type":"radio","entry":1680131739,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":1668502319,"legend":"Texto de pregunta 3","text":null,"type":"radio","entry":2050221285,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":1477695776,"legend":"Texto de pregunta 4","text":null,"type":"radio","entry":1175588237,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]},{"label":62433422,"legend":"Texto de pregunta 5","text":null,"type":"radio","entry":1102331706,"options":[["Opción 1",null,-2,null,0],["Opción 2",null,-2,null,0],["Opción 3",null,-2,null,0],["Opción 4",null,-2,null,0]]}],"title":"Titulo del formulario"}',
				answerLink:  "https://docs.google.com/spreadsheets/d/1DdLJt4pOLWcnjsJ2QLF4-IZupp1rmwyPwRA_ZiXAjqA/edit?resourcekey#gid=274104357",
				responseURL: "https://docs.google.com/forms/d/e/1FAIpQLSf7lneO_rH5tFwm1WXu6kwt7aQMDmZNZgkTzILprcHq6Crznw/formResponse"
			},
			{
				title: 'Test 2',
				testStr: '{"description":"Este es el segundo test de la unidad","questions":[{"label":1648629953,"legend":"Hola ¿cómo te llamas?","text":null,"type":"text","entry":595604424,"options":null},{"label":1599676364,"legend":"Elige tres colores","text":null,"type":"checkbox","entry":361289088,"options":[["Rojo",null,null,null,0],["Verde",null,null,null,0],["Amarillo",null,null,null,0],["Azul",null,null,null,0],["Morado",null,null,null,0],["Negro",null,null,null,0],["Blanco",null,null,null,0]]},{"label":2111586835,"legend":"Menú desplegable","text":null,"type":"dropdown","entry":1185583174,"options":[["Opción 1",null,null,null,0],["Opción 2",null,null,null,0],["Opción 3",null,null,null,0],["Opción 4",null,null,null,0]]}],"title":"Test 2"}',
				answerLink:  "https://docs.google.com/spreadsheets/d/11wWGJk386dt9TTrhQVSpxFj7kwc-HSKGYg99E_BhATE/edit?resourcekey#gid=37922101",
				responseURL: "https://docs.google.com/forms/d/e/1FAIpQLScU8HEaqAgw406cX1lYTv7y7NGFnYoht_7HJqrtmc85xF1Jlg/formResponse"
			},
			{
				title: 'Final Test',
				testStr: "    ",
				answerLink:  "    ",
				responseURL: "    "
			}
		]
	}
}


export default App