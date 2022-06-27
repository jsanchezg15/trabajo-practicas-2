import * as React from 'react';

export default class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {stylePath: 'style1.css'};
    }

    handleButtonClick(){
        this.setState({stylePath: 'style2.css'});
    }

    render(){
        return (
            <div>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
                <button type="button" onClick={this.handleButtonClick.bind(this)}>Click to update stylesheet</button>
            </div>
        )
    }
};





/*import React, { useState, useEffect } from 'react'

const MainPage = (props) => {
	
	const [ stylePath, setStylePath ] = useState("style1.css")
    
	const handleButtonClick = () => {
		setStylePath('style2.css')
	}

	useEffect(() => {
		var head = document.head
		var link = document.createElement("link")
console.log(head)
		link.type = "text/css"
		link.rel  = "stylesheet"
		link.href = stylePath

    	head.appendChild(link)
		console.log(document)
    	return () => { head.removeChild(link) }

	}, [stylePath])

	return (
		<div>
			<button type="button" onClick={handleButtonClick}>  Click to update stylesheet  </button>
			<div className="main">Hola Mundo</div>
		</div>
	)
}

export default MainPage*/