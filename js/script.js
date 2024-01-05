const content = document.getElementById("content")

const homeUrl = ""

// Fetch header
fetch(`${homeUrl}/src/header.html`)
.then(response => response.text())
.then(data => {
	const parser = new DOMParser()
	const nav = parser.parseFromString(data, "text/html")
	content.prepend(nav.body.firstChild)
	const scriptFile = document.createElement("script")
	scriptFile.src = `${homeUrl}/js/navbar.js`
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


