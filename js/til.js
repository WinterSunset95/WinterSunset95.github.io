
// This is the TIL content
const latest = document.getElementById("latest")
const other_til = document.getElementById("other_til")
const tilArrows = document.querySelectorAll(".til_arrow")

function getTil(filename) {
	fetch(`${homeUrl}/til/${filename}.html`)
	.then(response => response.text())
	.then(data => {
		const div = document.createElement("div")
		div.innerHTML = data
		console.log(div)
		const title = div.querySelector("h1").innerText
		const intro = div.querySelector("#intro").innerText
		const toAppend = document.createElement("div")
		toAppend.innerHTML = `
		<a href="${homeUrl}/til/til.html?id=${filename}">
			<h3>${title}</h3>
		</a>
		<p>${latest ? intro : ""}</p>
		`
		if (latest) {
			latest.appendChild(toAppend)
		} else {
			other_til.appendChild(toAppend)
		}
	})
}

fetch(`${homeUrl}/til/til.json`)
	.then(response => response.json())
	.then(data => {
		data.forEach(name => {
			getTil(name)
		})
	})

const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id") ? urlParams.get("id") : ""
if (id != "") {
	const TIL = document.getElementById("TIL")
	const prev_next = document.getElementById("prev_next")
	fetch(`${homeUrl}/til/${id}.html`)
		.then(response => response.text())
		.then(data => {
			const div = document.createElement("div")
			div.innerHTML = data
			TIL.innerHTML = div.innerHTML
		})
	fetch(`${homeUrl}/til/til.json`)
		.then(response => response.json())
		.then(data => {
			let indexOfId;
			let nameOfId;
			let lengthOfArray = data.length
			data.forEach((name, index) => {
				if (name == id) {
					indexOfId = index
					nameOfId = name
				}
			})
			const link = document.createElement('a');
			const link2 = document.createElement('a');
			switch(indexOfId) {
				case 0:
					link.innerHTML = "Home"
					link.href = "/"
					prev_next.appendChild(link)
					link2.innerHTML = "Next Post"
					link2.href = `/til/til.html?id=${data[indexOfId+1]}`
					prev_next.appendChild(link2)
					break
				case lengthOfArray-1:
					link.innerHTML = "Prev Post"
					link.href = `/til/til.html?id=${data[indexOfId-1]}`
					prev_next.appendChild(link)
					link2.innerHTML = "Home"
					link2.href = `/`
					prev_next.appendChild(link2)
					break
				default:
					link.innerHTML = "Prev Post"
					link.href = `/til/til.html?id=${data[indexOfId-1]}`
					prev_next.appendChild(link)
					link2.innerHTML = "Next Post"
					link2.href = `/til/til.html?id=${data[indexOfId+1]}`
					prev_next.appendChild(link2)
					break
			}
		})
} else {
	console.log("No id")
}

function toggleOtherTil() {
	other_til.classList.toggle("til_collapsed")
	tilArrows.forEach(item => {
		item.classList.toggle("arrow_hidden")
	})
}
