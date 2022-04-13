import React, { Component } from "react"; 
import Home from "./Main/Home" 
import About from "./Main/About" 
import Explore from "./Main/Explore" 
import Games from "./Main/Games" 
import Projects from "./Main/Projects" 
import Tutorials from "./Main/Tutorials"
 
class Child extends React.Component {
	render () {
		if (this.props.tab === "Home") {
			return (<Home />)
		} else if (this.props.tab === "About") {
			return (<About />)
		} else if (this.props.tab === "Explore") {
			return (<Explore />)
		} else if (this.props.tab === "Games") {
			return (<Games />)
		} else if (this.props.tab === "Projects") { 
			return (<Projects />)
		} else if (this.props.tab === "Tutorials") {
			return (<Tutorials />)
		}
	}
} 

class Parent extends React.Component {
	state = {
		tab: null
	};
	homeTab = e => {
		this.setState({tab: "Home"})
	}aboutTab = e => {
		this.setState({tab: "About"})
	}exploreTab = e => {
		this.setState({tab: "Explore"})
	}gamesTab = e => {
		this.setState({tab: "Games"})
	}projectsTab = e => {
		this.setState({tab: "Projects"})
	}tutorialsTab = e => {
		this.setState({tab: "Tutorials"})
	}
	render () {
		return (
			<Child tab={this.state.tab} />
		)
	}
}
