const content = document.getElementById("content")

const homeUrl = "/wintersunset95.github.io"

// Fetch header
fetch(`${homeUrl}/src/header.html`)
.then(response => response.text())
.then(data => {
	const parser = new DOMParser()
	const nav = parser.parseFromString(data, "text/html")
	content.prepend(nav.body.firstChild)
	const scriptFile = document.createElement("script")
	scriptFile.src = "./js/navbar.js"
	document.body.appendChild(scriptFile)
})

// Fetch footer
fetch(`${homeUrl}/src/footer.html`)
.then(response => response.text())
.then(data => {
	const parser = new DOMParser()
	const footer = parser.parseFromString(data, "text/html")
	content.appendChild(footer.body.firstChild)
})


// This is the TIL content
const latest = document.getElementById("latest")

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
		<a href="${homeUrl}/til/index.html?id=filename">
			<h3>${title}</h3>
		</a>
		<p>${intro}</p>
		`
		latest.appendChild(toAppend)
	})
}

fetch(`${homeUrl}/til/til.json`)
.then(response => response.json())
.then(data => {
	data.forEach(name => {
		getTil(name)
	})
})
