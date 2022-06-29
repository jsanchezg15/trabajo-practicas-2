import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Lesson from '../pages/Lesson/Lesson'
import Test from '../pages/Test/Test'
import Videos from '../pages/Videos/Videos'


export default function Routes(props) {

	const { user, course } = props

	return (
		<Switch>

			{course && course.lessons && 
				course.lessons.map((lesson, index) => 
					<Route path={'/lesson/' + index} exact> 
						<Lesson 
							title={lesson.title} 
							slides={lesson.slides} 
							pdfURL={lesson.pdfURL}
						/>
					</Route>
				)
			}

			{course && course.tests &&
				course.tests.map((test, index) => 
					<Route path={'/test/' + index} exact> 
						<Test 
							user={user} 
							testObj={test.testObj} 
							answerLink={test.answerLink} 
							responseURL={test.responseURL}
						/>
					</Route>
				)
			}
  
  			{course && course.videos &&
				<Route path='/videos' exact>
					<Videos data={course.videos}/>
				</Route>
			}
		</Switch>
	)
}

