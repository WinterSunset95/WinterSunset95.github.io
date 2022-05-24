const Home = () => {
  return (
    <div class="parallax">
	<img class="bg" src="./assets/mountains.jpg" alt="" srcset="" />
	<section class="home d-flex flex-column p-2 p-md-3 p-lg-5 align-items-center">
	    <div class="d-flex flex-row-reverse col-12">
	    	<a href="https://github.com/WinterSunset95/WinterSunset95.github.io" class="text-center px-2 py-1 top-right-logo d-flex flex-column justify-content-center">Source on GitHub</a>
	    	<a href="" class="text-center px-2 py-2 d-flex flex-column justify-content-center">Suggest</a>
	    </div>
	    <div class="title-container d-flex align-items-center border border-3 border-white rounded-3 col-12 my-auto">
	        <div class="m-auto">
		    <p class="h1 title text-center align-middle">WinterSunset95</p>
		    <p class="description text-center align-middle">Web Developer | Software Enthusiast</p>
	        </div>
	    </div>
	</section>
	<section class="about d-flex flex-column align-items-center p-2 p-md-3 p-lg-5 justify-content-center">
	    <h3 class="text-center m-3 m-md-4 m-lg-5">About</h3>
	    <p class="text-center m-3 m-md-4 m-lg-5">Thank you for reading, I am a self taught developer from North-East India. At the time of writing this, I barely have 1 year of programming experience. <br /><br />Actively learning and open to suggestions</p>
	</section>
	<section class="content d-flex flex-column p-2 p-md-3 p-lg-5 justify-content-center">
	    <h3 class="text-center">Content</h3>
	    <div class="m-3 m-md-4 m-lg-5 p-1 p-md-2 p-lg-3">
		<a href="https://wintersunset95.github.io/winter-nvim" class="content-link p-1 p-md-2 p-lg-3">Winter-nvim</a>
	    </div>
	    <div class="m-3 m-md-4 m-lg-5 p-1 p-md-2 p-lg-3">
		<a href="https://wintersunset95.github.io/Arch-Dotfiles" class="content-link p-1 p-md-2 p-lg-3">Arch-Dotfiles</a>
	    </div> 
	    <div class="m-3 m-md-4 m-lg-5 p-1 p-md-2 p-lg-3">
		<a href="https://wintersunset95.github.io/Vid-Dwlder" class="content-link p-1 p-md-2 p-lg-3">Vid-Dwlder</a>
	    </div> 
	    <div class="m-3 m-md-4 m-lg-5 p-1 p-md-2 p-lg-3">
		<a href="https://wintersunset95.github.io/termux-gui" class="content-link p-1 p-md-2 p-lg-3">termux-gui</a>
	    </div> 
	    <div class="m-3 m-md-4 m-lg-5 p-1 p-md-2 p-lg-3">
		<a href="" class="content-link p-1 p-md-2 p-lg-3">Learning materials</a>
	    </div> 
	    <div class="m-3 m-md-4 m-lg-5 p-1 p-md-2 p-lg-3">
		<a href="" class="content-link p-1 p-md-2 p-lg-3">Other Developers</a>
	    </div>
	</section>
	<footer class="d-flex flex-row flex-wrap align-items-center p-3 justify-content-center">
	    <a href="https://github.com/WinterSunset95" class="p-2 p-md-4 p-lg-5">
	    	<i class="fa-brands fa-2xl fa-github"></i>
	    </a>
	    <a href="" class="p-2 p-md-4 p-lg-5">
		<i class="fa-brands fa-2xl fa-facebook"></i>
	    </a>
	    <a href="" class="p-2 p-md-4 p-lg-5">
		<i class="fa-brands fa-2xl fa-linkedin"></i>
	    </a>
	    <a href="" class="p-2 p-md-4 p-lg-5">
		<i class="fa-brands fa-2xl fa-instagram"></i>
	    </a>
	    <a href="" class="p-2 p-md-4 p-lg-5">
		<i class="fa-brands fa-2xl fa-youtube"></i>
	    </a>
	    <a href="" class="p-2 p-md-4 p-lg-5">
		<i class="fa-brands fa-2xl fa-twitter"></i>
	    </a>
	</footer>
    </div>

  )
}


ReactDOM.render(<Home />, document.getElementById('root'))
