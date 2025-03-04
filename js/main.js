const container = document.querySelector("#container")
const blocks = document.querySelectorAll(".block-container")
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
				oneOneIntroFunc()
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
				oneOneOutroFunc()
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
