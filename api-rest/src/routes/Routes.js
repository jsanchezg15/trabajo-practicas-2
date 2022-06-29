const { Router } = require('express')
const { v4 }     = require('uuid')
const fetch      = require('node-fetch')

const router  = Router()
const { storage, db } = require("../firebase/index")


router.post('/postImage', async (req, res) => {
	try {
		const image = req.files.image 
		const ref   = req.headers.ref || "noReference/"
		const id    = v4()

		const uploadTask = await storage.ref(ref + id).put(image.data, {contentType: image.mimetype})
		
		const imageURL   = await storage.ref(ref + id).getDownloadURL()

		return res.status(200).json(imageURL)
	}
	catch(error) {
		console.log(error)
		return res.status(500).json({error})
	}
})

router.get('/getHtml', async (req, res) => {
	try {
		const url  = req.headers.url
		const resp = await fetch(url)
		const data = await resp.text()

		return res.status(200).json(data)
	}
	catch(error) {
		console.log(error)
		return res.status(500).json({error})
	}
})

router.post('/createUser', async (req, res) => {
	try {
		const user = req.body

		if(!user.email || !user.password || !user.displayName || !user.phoneNumber)
			throw {message: "user must have email, password, name and phoneNumber", code: 404}

		const snapshot = await db.collection("UsersCollection").where("email", "==", user.email).get()
		
		const foundUsers = snapshot.docs.map(doc => doc.data());

		if(foundUsers.length != 0)
			throw {message: "That email is being used"}

		await db.collection("UsersCollection").add(user)

		return res.status(200).json(JSON.stringify({message: "DONE", user}))
	}
	catch(error) {
		console.log(error)
		return res.status(error.code || 500).json(error)		
	}
})

module.exports = router