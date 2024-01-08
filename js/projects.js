
const projectsList = document.querySelector("#projects_list")

projectsData.forEach((project) => {
	const projectCard = document.createElement("li")
	projectCard.classList.add("project_card")

	projectCard.innerHTML = `
	<img src="${project.image}" alt="${project.alt}" />
	<div class="project_details">
		<h3>${project.title}</h3>
		<p>${project.description}</p>
	</div>
	<div class="project_status"><i class="fa-solid fa-fire"></i> ${project.status}</div>
	<a target="_blank" href="${project.link}">View Project</a>
	`

	projectsList.appendChild(projectCard)
})
