const screenshotPreviewer = document.querySelector("#screenshot-previewer")
const screenshotImage = screenshotPreviewer.querySelector("img")
let previewButtons = document.querySelectorAll(".preview-button")
const frontendProjectsList = document.querySelectorAll(".project")

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