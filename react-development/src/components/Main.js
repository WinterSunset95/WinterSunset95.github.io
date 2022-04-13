import React from "react"; 
import Home from "./Main/Home" 
import About from "./Main/About" 
import Explore from "./Main/Explore" 
import Games from "./Main/Games" 
import Projects from "./Main/Projects" 
import Tutorials from "./Main/Tutorials"
 
 
 
 
 
export default function Main() {
    return ( 
		<> 
			<Home />
			<About />
			<Explore />
			<Games/>   
			<Projects />
			<Tutorials />
		</>
    )
}
