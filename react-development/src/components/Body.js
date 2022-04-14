import React from 'react'
import Logo from '../images/Logo.jpg'

import Home from './Main/Home'
import About from './Main/About'
import Projects from './Main/Projects'
import Games from './Main/Games'
import Explore from './Main/Explore'
import Tutorials from './Main/Tutorials'

function openTab(evt) {
	var i, child, tabName;
	child = document.getElementById('tabList').children
	for (i=0; i<child.length; i++) {
		child[i].classList.remove("active")
	}
	evt.currentTarget.className += " active"
}

export default function Body() {
	const [home, setHome] = React.useState(true)
	const [about, setAbout] = React.useState(false)
	const [projects, setProjects] = React.useState(false)
	const [games, setGames] = React.useState(false)
	const [explore, setExplore] = React.useState(false)
	const [tutorials, setTutorials] = React.useState(false)
	function openTab(evt) {
		var i, child, tabName;
		child = document.getElementById('tabList').children
		for (i=0; i<child.length; i++) {
			child[i].classList.remove("active")
		}
		evt.currentTarget.className += " active"
		tabName = evt.currentTarget.innerText
		if (tabName === "Home") {
			setHome(prevState => prevState=true)
			setAbout(prevState => prevState=false)
			setProjects(prevState => prevState=false)
			setGames(prevState => prevState=false)
			setExplore(prevState => prevState=false)
			setTutorials(prevState => prevState=false)
		} else if (tabName === "About") {
			setHome(prevState => prevState=false)
			setAbout(prevState => prevState=true)
			setProjects(prevState => prevState=false)
			setGames(prevState => prevState=false)
			setExplore(prevState => prevState=false)
			setTutorials(prevState => prevState=false)
		} else if (tabName === "Projects") {
			setHome(prevState => prevState=false)
			setAbout(prevState => prevState=false)
			setProjects(prevState => prevState=true)
			setGames(prevState => prevState=false)
			setExplore(prevState => prevState=false)
			setTutorials(prevState => prevState=false)
		} else if (tabName === "Games") {
			setHome(prevState => prevState=false)
			setAbout(prevState => prevState=false)
			setProjects(prevState => prevState=false)
			setGames(prevState => prevState=true)
			setExplore(prevState => prevState=false)
			setTutorials(prevState => prevState=false)
		} else if (tabName === "Explore") {
			setHome(prevState => prevState=false)
			setAbout(prevState => prevState=false)
			setProjects(prevState => prevState=false)
			setGames(prevState => prevState=false)
			setExplore(prevState => prevState=true)
			setTutorials(prevState => prevState=false)
		} else if (tabName === "Tutorials") {
			setHome(prevState => prevState=false)
			setAbout(prevState => prevState=false)
			setProjects(prevState => prevState=false)
			setGames(prevState => prevState=false)
			setExplore(prevState => prevState=false)
			setTutorials(prevState => prevState=true)
		}
	}
	

    return (
	<>
	<header className="navbar navbar-expand-md navbar-dark bg-dark">
		<nav className="container-xxl container-fluid flex-wrap flex-md-nowrap p-2" aria-label="Main Navigation">
			<a className="navbar-brand p-0" href="/" aria-label="Winter">
				<img src={Logo} width="40px" alt="Winters Logo" className="rounded-circle m-2" />
				<span className="pl-2">Winter</span>
			</a>
			<button className="navbar-toggler" type="toggle" data-bs-toggle="collapse" data-bs-target="#bdNavbar" aria-controls="#bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div id="bdNavbar" className="navbar-collapse collapse show">
				<ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0 nav-pills tabList" id="tabList">
					<li onClick={openTab} className="cursor-float nav-link p-2 col-6 col-md-auto active">Home</li>
					<li onClick={openTab} className="cursor-float nav-link p-2 col-6 col-md-auto">Explore</li>
					<li onClick={openTab} className="cursor-float nav-link p-2 col-6 col-md-auto">Projects</li>
					<li onClick={openTab} className="cursor-float nav-link p-2 col-6 col-md-auto">Games</li>
					<li onClick={openTab} className="cursor-float nav-link p-2 col-6 col-md-auto">About</li>
					<li onClick={openTab} className="cursor-float nav-link p-2 col-6 col-md-auto">Tutorials</li>
				</ul>
				<hr />
				<ul className="navbar-nav flex-row flex-wrap ms-md-auto">
					<li className="nav-item col-6 col-md-auto"><a className="nav-link p-2" href="">GitHub</a></li>
					<li className="nav-item col-6 col-md-auto"><a className="nav-link p-2" href="">Facebook</a></li>
					<li className="nav-item col-6 col-md-auto"><a className="nav-link p-2" href="">Instagram</a></li>
					<li className="nav-item col-6 col-md-auto"><a className="nav-link p-2" href="">Twitter</a></li>
				</ul>
			</div>
		</nav>
	</header>
	<Home active={home} />
	<Explore active={explore} />
	<Projects active={projects} />
	<Games active={games} />
	<About active={about} />
	<Tutorials active={tutorials} />
	
	</>
   )
}
