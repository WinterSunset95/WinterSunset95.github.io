const container = document.querySelector("#container")
const blocks = document.querySelectorAll(".block-container")
const screenshotPreviewer = document.querySelector("#screenshot-previewer")
const screenshotImage = screenshotPreviewer.querySelector("img")
let previewButtons = document.querySelectorAll(".preview-button")
const mainAbout = document.querySelector("#main-about")
const frontendProjectsList = document.querySelectorAll(".project")
const navXButtons = document.querySelectorAll(".nav-x-button")
const navYButtons = document.querySelectorAll(".nav-y-button")

const colAndRows = ["one", "two", "three"]

let currCol = 0;
let currRow = 0;
navXButtons.forEach((button, index) => {
	button.addEventListener('click', () => {
		document.getElementById(`${colAndRows[currRow]}-${colAndRows[index]}`).scrollIntoView()
	})
})
navYButtons.forEach((button, index) => {
	button.addEventListener('click', () => {
		document.getElementById(`${colAndRows[index]}-${colAndRows[currCol]}`).scrollIntoView()
	})
})

const observer = new IntersectionObserver((entries) => {
	const mainAboutAnimation = [
		{
			"width": "0%",
			padding: "0rem"
		},
		{
			"width": "80%",
			padding: "2rem"
		}
	]
	const mainAboutAnimationOptions = {
		duration: 500,
		fill: "forwards",
		easing: "cubic-bezier(0.42, 0, 0.58, 1)",
	}

	entries.forEach(entry => {
		const id = entry.target.id
		if (entry.isIntersecting) {
			currCol = entry.target.dataset.col;
			currRow = entry.target.dataset.row;
			navXButtons.forEach(button => button.classList.remove("nav-x-button-active"))
			navXButtons[entry.target.dataset.col].classList.add("nav-x-button-active")
			navYButtons.forEach(button => button.classList.remove("nav-y-button-active"))
			navYButtons[entry.target.dataset.row].classList.add("nav-y-button-active")
			if (id == "one-one") {
				// one-one: Main page, about me
				mainAbout.animate(mainAboutAnimation, mainAboutAnimationOptions)
			} else if (id == "one-two") {
				// two-one: 
			} else if (id == "two-one") {
				// two-one: frontend projects
				frontendProjectsList.forEach(project => {
					const projId = project.id
					project.style.animation = `${projId}-enter 500ms forwards ease-in`;
				})
			}
		} else {
			if (id == "one-one") {
				mainAbout.animate([...mainAboutAnimation].reverse(), mainAboutAnimationOptions)
			} else if (id == "one-two") {
				console.log("leave main backend")
			} else if (id == "two-one") {
				frontendProjectsList.forEach(project => {
					const projId = project.id
					project.style.animation = `${projId}-leave 500ms forwards ease-in`;
				})
			}
		}
	})
}, {
	root: document.querySelector("#container"),
	threshold: "0.5"
})
blocks.forEach(block => observer.observe(block))

frontendProjectsList.forEach((item, index) => {
	if (!frontendProjects[index]) return
	const currData = frontendProjects[index];
	if (!currData.title) return;
	const template = `
		<div class="project-img-container">
			<img src="${currData.image}" alt="${currData.alt}">
		</div>
		<div class="project-name-container">
			<h1>${currData.title}</h1>
		</div>
		<div class="project-data-container">
			<h4>${currData.description}</h4>
			<div class="buttons">
				<a href="${currData.link}" target="_blank">
					<button>
						<span>Visit</span>
						<i class="fa-solid fa-arrow-up-right-from-square"></i>
					</button>
				</a>
				<a href="${currData.projectLink}" target="_blank">
					<button>
						<span>Source</span>
						<i class="fa-brands fa-github"></i>
					</button>
				</a>
				<button data-link="${currData.image}" class="preview-button">
					<span>Preview</span>
					<i class="fa-solid fa-eye"></i>
				</button>
			</div>
		</div>
	`
	item.innerHTML = template;
	previewButtons = document.querySelectorAll(".preview-button")
})

let mouseX = 0;
let mouseY = 0;
window.onmousemove = function(e) {
	mouseX = e.clientX
	mouseY = e.clientY
}
window.ontouchstart = function(e) {
	mouseX = e.clientX
	mouseY = e.clientY
}

previewButtons.forEach((button, index) => {
	button.addEventListener('focus', (e) => {
		const dataLink = button.dataset.link
		screenshotImage.src = dataLink
		const rect = button.getBoundingClientRect()
		screenshotPreviewer.animate([
			{
				width: 0,
				height: 0,
				top: mouseY + "px",
				left: mouseX + "px"
			},
			{
				width: "100%",
				height: "100%",
				top: 0,
				left: 0
			}
		], {
			duration: 500,
			fill: "forwards",
			easing: "cubic-bezier(0.42, 0, 0.58, 1)"
		})
	})
	button.addEventListener('focusout', (e) => {
		const rect = button.getBoundingClientRect()
		screenshotPreviewer.animate([
			{
				width: "100%",
				height: "100%",
				top: 0,
				left: 0
			},
			{
				width: 0,
				height: 0,
				top: mouseY + "px",
				left: mouseX + "px"
			}
		], {
			duration: 500,
			fill: "forwards",
			easing: "cubic-bezier(0.42, 0, 0.58, 1)"
		})
	})
})
