const resumeData = {
    personalInfo: {
        fullName: "Cayden France",
        phone: "(469-596-2502)",
        email: "cfcodinginspire@gmail.com",
        location: "Heartland, Texas",
        website: "https://www.caydenfrance.com"
    },
    summary: `Experienced professional with 2 years of experience in Software Development and Web Development. Proven track record of multiple personal and work projects.
              Worked with many different frameworks with a focus on Javascript, HTML and CSS. I have also worked with React, Azure and Python.`,
    experience: [
        {
            title: "Junior Software Dev - Web Dev",
            company: "Inspire Solar LLC",
            location: "Dallas",
            startDate: "July 2023",
            endDate: "Present",
            achievements: [
                "Lead developer of Solar Calculator.",
                "Certified in Web dev while working here.",
                "Successfully deployed first application to Azure",
                "Certified in working in Azure",
                "Worked with API testing, deployment and implementation"
            ]
        },
        {
            title: "FreeLance Web Development",
            company: "FreeLance / Contract work",
            location: "",
            startDate: "December 2022",
            endDate: "Present",
            achievements: [
                "Worked with creating multiple websites for multiple clients (view portfolio)."
            ]
        }
    ],
    education: [
        {
            degree: "In progress: Bachelors in Computer Science",
            school: "Trinity Valley Community College",
            location: "Athens",
            graduationYear: "2027",
            details: "Took multiple courses on working in Azure. Taking programing 1 and 2. Also took 2 computer basics. Built multiple applications while attending here, also entered first Hackathon."
        }
    ],
    skills: {
        technical: [
            "HTML",
            "JavaScript",
            "CSS",
            "Azure Fundamentals",
            "React",
            "Python"
        ],
        soft: [
            "Working in different environments.",
            "Know how to manage and work with others.",
            "Very good at communicating.",
            "Good at managing time and getting things done by deadlines.",
            "Knowledge in working in multiple IDEs like Pycharm and VSCode"

        ]
    },
    certifications: [
        "Certification in WebDev",
        "Certification in Azure Fundamentals",
        "Certified in working in Excel"
    ]
};

function updatePersonalInfo() {
    document.getElementById('fullName').textContent = resumeData.personalInfo.fullName;
    document.getElementById('phone').textContent = resumeData.personalInfo.phone;
    document.getElementById('email').textContent = resumeData.personalInfo.email;
    document.getElementById('location').textContent = resumeData.personalInfo.location;
    document.getElementById('website').textContent = resumeData.personalInfo.website;
}


function updateSummary() {
    document.getElementById('summary').textContent = resumeData.summary;
}

function updateExperience() {
    const experienceSection = document.getElementById('experience');
    const h2 = experienceSection.querySelector('h2');
    experienceSection.innerHTML = '';
    experienceSection.appendChild(h2);

    const experienceHTML = resumeData.experience.map(job => `
        <div class="job">
            <div class="job-header">
                <h3>${job.title}</h3>
                <span class="date">${job.startDate} - ${job.endDate}</span>
            </div>
            <div class="company">${job.company}${job.location ? ', ' + job.location : ''}</div>
            <ul class="achievements">
                ${job.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    h2.insertAdjacentHTML('afterend', experienceHTML);
}

function updateEducation() {
    const educationSection = document.getElementById('education');
    const h2 = educationSection.querySelector('h2');
    educationSection.innerHTML = '';
    educationSection.appendChild(h2);

    const educationHTML = resumeData.education.map(edu => `
        <div class="education-item">
            <div class="education-header">
                <h3>${edu.degree}</h3>
                <span class="date">Graduation Year: ${edu.graduationYear}</span>
            </div>
            <div class="school">${edu.school}, ${edu.location}</div>
            <div class="details">${edu.details}</div>
        </div>
    `).join('');

    h2.insertAdjacentHTML('afterend', educationHTML);
}


function updateSkills() {
    const technicalList = document.getElementById('technicalSkills');
    const softList = document.getElementById('softSkills');

    technicalList.innerHTML = resumeData.skills.technical
        .map(skill => `<li>${skill}</li>`)
        .join('');

    softList.innerHTML = resumeData.skills.soft
        .map(skill => `<li>${skill}</li>`)
        .join('');
}

function updateCertifications() {
    const certSection = document.getElementById('certifications');
    const h2 = certSection.querySelector('h2');
    certSection.innerHTML = '';
    certSection.appendChild(h2);

    const certHTML = `
        <ul>
            ${resumeData.certifications.map(cert => `<li>${cert}</li>`).join('')}
        </ul>
    `;

    h2.insertAdjacentHTML('afterend', certHTML);
}

function initializeResume() {
    updatePersonalInfo();
    updateSummary();
    updateExperience();
    updateEducation();
    updateSkills();
    updateCertifications();
}


document.addEventListener('DOMContentLoaded', initializeResume);
