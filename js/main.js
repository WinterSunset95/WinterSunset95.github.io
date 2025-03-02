const container = document.querySelector("#container")
const blocks = document.querySelectorAll(".block-container")

const mainAbout = document.querySelector("#main-about")
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

const frontendProjectsList = document.querySelectorAll(".project")

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		const id = entry.target.id
		if (entry.isIntersecting) {
			console.log(`Entering: ${id}`)
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
			console.log(`Leaving: ${id}`)
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
			<h3>${currData.description}</h3>
			<div class="buttons">
				<a href="${currData.link}" target="_blank">
					<button>
						<span>Visit</span>
						<i class="fa-solid fa-arrow-up-right-from-square"></i>
					</button>
				</a>
				<a href="${currData.projectLink}" target="_blank">
					<button>
						<span>View Source</span>
						<i class="fa-brands fa-github"></i>
					</button>
				</a>
			</div>
		</div>
	`
	item.innerHTML = template;
})
