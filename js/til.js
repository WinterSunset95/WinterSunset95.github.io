
// This is the TIL content
const latest = document.getElementById("latest")
const other_til = document.getElementById("other_til")
const tilArrows = document.querySelectorAll(".til_arrow")

// This function renders the list on the homepage
function getTil(filename) {
	fetch(`${homeUrl}/til/${filename}.html`)
	.then(response => response.text())
	.then(data => {
		const div = document.createElement("div")
		div.innerHTML = data
		console.log(div)
		const title = div.querySelector("h1").innerText
		const toAppend = document.createElement("li")
		toAppend.innerHTML = `
		<h4>
			<a href="${homeUrl}/til/?id=${filename}">
				${title}
			</a>
		</h4>
		`
		if (latest) {
			latest.appendChild(toAppend)
		} else {
			other_til.appendChild(toAppend)
		}
	})
}

// Part of the function above
tilData.forEach(name => {
	getTil(name)
})

// We will use this on the TIL page
if (document.getElementById("TIL")) {
	const urlParams = new URLSearchParams(window.location.search)
	let id = urlParams.get("id") ? urlParams.get("id") : tilData[tilData.length-1]
	const TIL = document.getElementById("TIL")
	const prev_next = document.getElementById("prev_next")
	fetch(`${homeUrl}/til/${id}.html`)
		.then(response => response.text())
		.then(data => {
			const div = document.createElement("div")
			div.innerHTML = data
			TIL.innerHTML = div.innerHTML
			const title = div.querySelector("h1").innerText
			const description = div.querySelector("#description").innerText
			document.title = title
			document.querySelector("meta[name='description']").setAttribute("content", description)
		})
	let indexOfId;
	let nameOfId;
	let lengthOfArray = tilData.length
	tilData.forEach((name, index) => {
		if (name == id) {
			indexOfId = index
			nameOfId = name
		}
	})
	const link = document.createElement('a');
	const link2 = document.createElement('a');
	switch(indexOfId) {
		case 0:
			link.innerHTML = "TIL"
			link.href = "/til/"
			prev_next.appendChild(link)
			link2.innerHTML = "Next Post"
			link2.href = `/til/?id=${tilData[indexOfId+1]}`
			prev_next.appendChild(link2)
			break
		case lengthOfArray-1:
			link.innerHTML = "Prev Post"
			link.href = `/til/?id=${tilData[indexOfId-1]}`
			prev_next.appendChild(link)
			link2.innerHTML = "TIL"
			link2.href = `/til/`
			prev_next.appendChild(link2)
			break
		default:
			link.innerHTML = "Prev Post"
			link.href = `/til/?id=${tilData[indexOfId-1]}`
			prev_next.appendChild(link)
			link2.innerHTML = "Next Post"
			link2.href = `/til/?id=${tilData[indexOfId+1]}`
			prev_next.appendChild(link2)
			break
	}
} else {
	console.log("No TIL ID. We are in Home page")
}

function toggleOtherTil() {
	other_til.classList.toggle("til_collapsed")
	tilArrows.forEach(item => {
		item.classList.toggle("arrow_hidden")
	})
}
