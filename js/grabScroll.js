const scrollContainer = document.querySelector("#container")

let mouseIsDown = false;
let mouseStartAtX = 0;
let mouseStartAtY = 0;
let scrollLeft = 0;
let scrollTop = 0;
let isScrolling = false;

scrollContainer.addEventListener('mousedown', (e) => {
	mouseIsDown = true;
	scrollContainer.style.cursor = "grabbing"
	mouseStartAtX = e.clientX;
	mouseStartAtY = e.clientY;
	scrollLeft = scrollContainer.scrollLeft
	scrollTop = scrollContainer.scrollTop
})

scrollContainer.addEventListener('mouseup', (e) => {
	mouseIsDown = false;
	scrollContainer.style.cursor = "grab"
})

scrollContainer.addEventListener('mouseleave', (e) => {
	mouseIsDown = false;
	scrollContainer.style.curor = "grab"
})

scrollContainer.addEventListener('mousemove', (e) => {
	if (!mouseIsDown) return;
	e.preventDefault();
	const currX = e.clientX;
	const currY = e.clientY;
	if (!isScrolling) {
		isScrolling = true;
		requestAnimationFrame(() => {
			scrollContainer.scrollTo({
				top: scrollTop + ((mouseStartAtY - currY) * 3),
				left: scrollLeft + ((mouseStartAtX - currX) * 3),
				behavior: "smooth",
			})
			isScrolling = false;
		})
	}
})
