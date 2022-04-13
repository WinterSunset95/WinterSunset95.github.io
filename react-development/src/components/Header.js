import React from 'react'
import Logo from '../images/Logo.jpg'

export default function Header() {
    return (
		<header class="navbar navbar-expand-md navbar-dark bg-dark">
			<nav class="container-xxl container-fluid flex-wrap flex-md-nowrap p-2" aria-label="Main Navigation">
				<a class="navbar-brand p-0" href="/" aria-label="Winter">
					<img src={Logo} width="40px" alt="Winters Logo" className="rounded-circle m-2" />
					<span class="pl-2">Winter</span>
				</a>
				<button class="navbar-toggler" type="toggle" data-bs-toggle="collapse" data-bs-target="#bdNavbar" aria-controls="#bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div id="bdNavbar" class="navbar-collapse collapse show">
					<ul class="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0 nav-pills">
						<li class="nav-item col-6 col-md-auto"><a class="nav-link p-2 active" href="">Home</a></li>
						<li class="nav-item col-6 col-md-auto"><a class="nav-link p-2" href="">Explore</a></li>
						<li class="nav-item col-6 col-md-auto"><a class="nav-link p-2" href="">Projects</a></li>
						<li class="nav-item col-6 col-md-auto"><a class="nav-link p-2" href="">Games</a></li>
						<li class="nav-item col-6 col-md-auto"><a class="nav-link p-2" href="">About</a></li>
						<li class="nav-item col-6 col-md-auto"><a class="nav-link p-2" href="">Tutorials</a></li>
					</ul>
					<hr />
					<ul class="navbar-nav flex-row flex-wrap ms-md-auto">
						<li class="nav-item col-6 col-md-auto"><a class="nav-link p-2" href="">GitHub</a></li>
						<li class="nav-item col-6 col-md-auto"><a class="nav-link p-2" href="">Facebook</a></li>
						<li class="nav-item col-6 col-md-auto"><a class="nav-link p-2" href="">Instagram</a></li>
						<li class="nav-item col-6 col-md-auto"><a class="nav-link p-2" href="">Twitter</a></li>
					</ul>
				</div>
			</nav>
		</header>
    )
}
