
// This is the TIL content
const latest = document.getElementById("latest")
const other_til = document.getElementById("other_til")

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
		<p>${intro}</p>
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

if (other_til) {
	const TIL = document.getElementById("TIL")
	const prev_next = document.getElementById("prev_next")
	const urlParams = new URLSearchParams(window.location.search)
	const id = urlParams.get("id") ? urlParams.get("id") : ""
	fetch(`${homeUrl}/til/${id}.html`)
		.then(response => response.text())
		.then(data => {
			const div = document.createElement("div")
			div.innerHTML = data
			TIL.innerHTML = div.innerHTML
		})
}


