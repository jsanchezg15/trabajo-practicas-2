import React from 'react'
import { Nav, Navbar } from "react-bootstrap"
import firebase from "../../utils/Firebase"
import "firebase/auth"
import "bootstrap/dist/css/bootstrap.min.css"
import './Hamburgesa.scss'

const Hamburgesa = (props) => {

	const { course } = props

	const logOut = () => {
		firebase.auth().signOut()
	}

	console.log(course)

	return (
		<Navbar collapseOnSelect expand={false} bg="dark" variant="dark">
			
			<Navbar.Brand href="/">{course.title || "Untitled course"}</Navbar.Brand>
			
			<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					
					{course && course.lessons && 
						course.lessons.map((lesson, index) => <Nav.Link href={"/lesson/" + index}>{lesson.title}</Nav.Link>)
					}

					{course && course.tests && 
						course.tests.map((test, index) => <Nav.Link href={"/test/" + index}>{test.title}</Nav.Link>)
					}
					
					<Nav.Link href="/Videos">Videos</Nav.Link>
					<Nav.Link onClick={logOut}>Close session</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		
		</Navbar>
	)
}

export default Hamburgesa