import React, { useState } from 'react'

// Styles
import './App.scss'
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.css'

// Components
import { auth } from './pages/utils/Firebase'
import Routes from './Routes'
import CreateUnit from './layouts/CreateUnit'

const App = () => {

	const [user, setUser] = useState(null)

	auth.onAuthStateChanged(user => setUser(user))

	return (
		<div className="App">
			{false && <Routes user={user}/>}
			<CreateUnit/>
		</div>
	)
}

export default App