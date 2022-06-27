import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Lesson1 from '../pages/B11U1L1/B11U1L1'
import Lesson2 from '../pages/B11U1L2/B11U1L2'
import Lesson3 from '../pages/B11U1L3/B11U1L3'
import Lesson4 from '../pages/B11U1L4/B11U1L4'
import Lesson5 from '../pages/B11U1L5/B11U1L5'

import L1work from '../pages/L1Work/L1work'
import L2work from '../pages/L2work/L2work'
import FinalTest from '../pages/FinalTest/FinalTest'
import Test from '../pages/Test/Test'

import Videos from '../pages/Videos/Videos'


export default function Routes(props) {

	const {
		user,
		setReloadApp,
		myclass,
		idclass,
		classname,
		teachername,
		teacherid
	} = props;

	return (
		<Switch>
			<Route path='/Lesson1' exact> 
				<Lesson1/>
			</Route>

			<Route path='/Lesson2' exact>
				<Lesson2/>
			</Route>

			<Route path='/Lesson3' exact>
				<Lesson3/>  
			</Route>  
			
			<Route path='/Lesson4' exact>
				<Lesson4/>
			</Route> 
			
			<Route path='/Lesson5' exact>
				<Lesson5/>
			</Route> 

			<Route path='/L1work' exact>
				<L1work 
					user        = {user}  
					myclass     = {myclass} 
					idclass     = {idclass} 
					classname   = {classname} 
					teachername = {teachername}
				/>
			</Route>

			<Route path='/L2work' exact>
				<L2work 
					user        = {user}
					myclass     = {myclass}
					idclass     = {idclass}
					classname   = {classname}
					teachername = {teachername}
				/>
			</Route>

			<Route path='/FinalTest' exact>
				<FinalTest 
					user         = {user} 
					setReloadApp = {setReloadApp}  
					myclass      = {myclass} 
					idclass      = {idclass} 
					classname    = {classname} 
					teachername  = {teachername}
				/>
			</Route>

			<Route path='/Test' exact>
				<Test 
					user         = {user} 
					setReloadApp = {setReloadApp}  
					myclass      = {myclass} 
					idclass      = {idclass} 
					classname    = {classname} 
					teachername  = {teachername}
				/>
			</Route>

			<Route path='/Videos' exact>
				<Videos/> 
			</Route>   
		</Switch>
	)
}

