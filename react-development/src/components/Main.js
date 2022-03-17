import React, { Component } from "react"; 
import Home from "./Main/Home" 
import About from "./Main/About" 
import Explore from "./Main/Explore" 
import Games from "./Main/Games" 
import Projects from "./Main/Projects" 
import Tutorials from "./Main/Tutorials"
 
export default function Main(tab) {
	if (tab === "Home") {
		return (
			<Home />
		)
	} else if (tab === "About") {
		return (
			<About />
		)
	} else if (tab === "Explore") {
		return (
			<Explore />
		)
	} else if (tab === "Games") {
		return (
			<Games />
		)
	} else if (tab === "Projects") {
		return (
			<Projects />
		)
	} else if (tab === "Tutorials") {
		return (
			<Tutorials />
		)
	}
}
