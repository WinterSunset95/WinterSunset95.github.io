document.addEventListener('DOMContentLoaded', async () => {
    // 1. Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    if (localStorage.getItem('theme') === 'light' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches === false)) {
        document.body.classList.add('light-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeIcon.classList.replace(isLight ? 'fa-moon' : 'fa-sun', isLight ? 'fa-sun' : 'fa-moon');
    });

    // 2. Routing & Data Fetching
    const urlParams = new URLSearchParams(window.location.search);
    const role = urlParams.get('role');
    let resumeData = null;
    
    if (role && document.getElementById('resume-content')) {
        const REMOTE_URL = `https://apis.wintersunset95.in/data/portfolio/${role}.json`;
        const LOCAL_URL = `./data/${role}.json`;

        try {
            const response = await fetch(REMOTE_URL);
            if (!response.ok) throw new Error(`Remote API returned ${response.status}`);
            resumeData = await response.json();
        } catch (error) {
            console.warn(`Remote fetch failed. Dropping to local fallback: ${LOCAL_URL}`, error.message);
            try {
                const localResponse = await fetch(LOCAL_URL);
                if (!localResponse.ok) throw new Error(`Local file missing: ${localResponse.status}`);
                resumeData = await localResponse.json();
            } catch (localError) {
                console.error("CRITICAL: Both remote and local data fetches failed.", localError);
                document.getElementById('hero-name').textContent = "System Offline";
                document.getElementById('hero-bio').textContent = "Could not retrieve portfolio data. Ensure you are running a local server to view local JSON files.";
                return; 
            }
        }

        // 3. Hydrate the WEB UI
        if(resumeData) {
            document.title = `Mark L F Tlau | ${resumeData.basics.title.split(' ')[0]}`;
            
            if(resumeData.basics) {
                if(document.getElementById('hero-name')) document.getElementById('hero-name').textContent = resumeData.basics.name;
                if(document.getElementById('hero-title')) document.getElementById('hero-title').textContent = resumeData.basics.title;
                if(document.getElementById('hero-bio')) document.getElementById('hero-bio').textContent = resumeData.basics.bio;

                const contactBar = document.getElementById('contact-bar');
                if(contactBar && resumeData.basics.contact) {
                    contactBar.innerHTML = `
                        <a href="https://wa.me/${resumeData.basics.contact.phone.replace(/\D/g,'')}" target="_blank"><i class="fa-brands fa-whatsapp"></i> ${resumeData.basics.contact.phone}</a>
                        <a href="mailto:${resumeData.basics.contact.email}"><i class="fa-solid fa-envelope"></i> ${resumeData.basics.contact.email}</a>
                        <a href="${resumeData.basics.contact.github}" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>
                        <a href="${resumeData.basics.contact.linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
                    `;

                    const hireMeBtn = document.getElementById('hire-me-btn');
                    if (hireMeBtn) hireMeBtn.href = `mailto:${resumeData.basics.contact.email}`;
                }
            }

            if(resumeData.skills && document.getElementById('hero-skills')) {
                const skillsContainer = document.getElementById('hero-skills');
                skillsContainer.innerHTML = ''; 
                resumeData.skills.forEach(skill => {
                    skillsContainer.innerHTML += `<span><i class="${skill.icon}"></i> ${skill.name}</span>`;
                });
            }

            if(resumeData.expertise && document.getElementById('expertise-grid')) {
                const expertiseGrid = document.getElementById('expertise-grid');
                expertiseGrid.innerHTML = ''; 
                resumeData.expertise.forEach(exp => {
                    expertiseGrid.innerHTML += `
                        <div class="card">
                            <i class="${exp.icon} card-icon"></i>
                            <h3>${exp.title}</h3>
                            <p>${exp.description}</p>
                        </div>
                    `;
                });
            }

            if(resumeData.experience && document.getElementById('experience-grid')) {
                const experienceGrid = document.getElementById('experience-grid');
                experienceGrid.innerHTML = ''; 
                resumeData.experience.forEach(job => {
                    experienceGrid.innerHTML += `
                        <div class="card">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                                <div>
                                    <h3 style="margin-bottom: 0.2rem;">${job.role}</h3>
                                    <p style="color: var(--accent); font-weight: 600;">${job.company}</p>
                                </div>
                                <span style="background: var(--bg-alt); padding: 0.3rem 0.8rem; border-radius: 999px; font-size: 0.85rem; border: 1px solid var(--border-color);">${job.duration}</span>
                            </div>
                            <p>${job.description}</p>
                        </div>
                    `;
                });
            }

            if(resumeData.projects && document.getElementById('projects-grid')) {
                const projectsGrid = document.getElementById('projects-grid');
                projectsGrid.innerHTML = ''; 
                resumeData.projects.forEach(proj => {
                    let linksHTML = '';
                    if(proj.links) {
                        linksHTML += '<div class="project-links">';
                        if(proj.links.live) linksHTML += `<a href="${proj.links.live}" target="_blank"><i class="fa-solid fa-link"></i> Live App</a>`;
                        if(proj.links.source) linksHTML += `<a href="${proj.links.source}" target="_blank"><i class="fa-brands fa-github"></i> Source Code</a>`;
                        linksHTML += '</div>';
                    }

                    projectsGrid.innerHTML += `
                        <div class="card project-card">
                            <h3><i class="${proj.icon}"></i> ${proj.title}</h3>
                            <p>${proj.description}</p>
                            <div class="card-tech">${proj.tech}</div>
                            ${linksHTML}
                        </div>
                    `;
                });
            }

            // 4. Hydrate the HIDDEN ATS PRINT TEMPLATE
            hydratePrintTemplate(resumeData);
        }
    }

    function hydratePrintTemplate(data) {
        document.getElementById('print-name').textContent = data.basics.name;
        document.getElementById('print-title').textContent = data.basics.title;
        
        const ghRaw = data.basics.contact.github.replace('https://', '');
        document.getElementById('print-contact').innerHTML = `
            Munirka, New Delhi &nbsp;|&nbsp; ${data.basics.contact.phone} &nbsp;|&nbsp; 
            <a href="mailto:${data.basics.contact.email}">${data.basics.contact.email}</a> &nbsp;|&nbsp; 
            <a href="${data.basics.contact.github}">${ghRaw}</a>
        `;

        document.getElementById('print-summary').innerHTML = `<p>${data.basics.bio}</p>`;

        // Skills as a clean comma-separated list
        if(data.skills) {
            const skillString = data.skills.map(s => s.name).join(', ');
            document.getElementById('print-skills').innerHTML = `<p><strong>Core Technologies:</strong> ${skillString}</p>`;
        }

        // Experience
        if(data.experience) {
            let expHTML = '';
            data.experience.forEach(job => {
                expHTML += `
                <div class="print-item">
                    <div class="print-item-header">
                        <span>${job.role} | ${job.company}</span>
                        <span class="print-item-date">${job.duration}</span>
                    </div>
                    <ul><li>${job.description}</li></ul>
                </div>`;
            });
            document.getElementById('print-experience').innerHTML = expHTML;
        }

        // Projects
        if(data.projects) {
            let projHTML = '';
            data.projects.forEach(proj => {
                let linkStr = '';
                if(proj.links && proj.links.live) linkStr = ` | <a href="${proj.links.live}">${proj.links.live.replace('https://','')}</a>`;
                else if (proj.links && proj.links.source) linkStr = ` | <a href="${proj.links.source}">${proj.links.source.replace('https://','')}</a>`;

                projHTML += `
                <div class="print-item">
                    <div class="print-item-header">
                        <span>${proj.title}${linkStr}</span>
                    </div>
                    <ul>
                        <li>${proj.description}</li>
                        <li><em>Technologies: ${proj.tech}</em></li>
                    </ul>
                </div>`;
            });
            document.getElementById('print-projects').innerHTML = projHTML;
        }

        // Education
        if(data.education) {
            let eduHTML = '';
            data.education.forEach(edu => {
                eduHTML += `
                <div class="print-item">
                    <strong>${edu.degree}</strong> - ${edu.institution} (${edu.year})
                </div>`;
            });
            document.getElementById('print-education').innerHTML = eduHTML;
        }
    }

    // 5. The Magic PDF Generator
    const downloadBtn = document.getElementById('download-pdf-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const mainUI = document.getElementById('resume-content');
            const navUI = document.getElementById('main-nav');
            const printTemplate = document.getElementById('print-template');
            
            // Swap visibility temporarily to allow html2pdf to render the hidden template
            mainUI.style.display = 'none';
            navUI.style.display = 'none';
            printTemplate.style.display = 'block';

            const opt = {
                margin:       12, // Standard 12mm margins
                filename:     `Mark_Tlau_Resume_${role || 'General'}.pdf`,
                image:        { type: 'jpeg', quality: 1 },
                html2canvas:  { scale: 2, useCORS: true },
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            html2pdf().set(opt).from(printTemplate).save().then(() => {
                // Instantly swap back
                printTemplate.style.display = 'none';
                mainUI.style.display = 'block';
                navUI.style.display = 'flex';
            });
        });
    }
});
