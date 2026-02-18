/* CREATING PROJECT CARDS DYNAMICALLY */
// Array of project objects
const projects = [
    {
        name: "Super Cool Project",
        description: "Some Dummy Text... This Project awaits review from the dept of technology"
    },
    {
        name: "AI Task Manager",
        description: "Smart task management with machine learning predictions and automated scheduling"
    },
    {
        name: "Eco Dashboard",
        description: "Real-time environmental data visualization with carbon footprint tracking"
    },
    {
        name: "Health Tracker Pro",
        description: "Comprehensive health monitoring with workout plans and nutrition guides"
    },
    {
        name: "Social Media Analytics",
        description: "Advanced analytics tool for social media engagement and growth tracking"
    },
    {
        name: "Crypto Portfolio",
        description: "Cryptocurrency portfolio manager with real-time price alerts and trends"
    }
];

// Function to create project cards
function createProjectCards() {
    const adminProjectsDiv = document.getElementById("admin-projects");
    
    // Clear existing content (optional)
    adminProjectsDiv.innerHTML = "";
    
    // Loop through projects array
    projects.forEach(project => {
        // Create project card
        const projectCard = document.createElement("div");
        projectCard.setAttribute("class", "project-card");
        
        // Create text container (div for h4 and p)
        const textContainer = document.createElement("div");
        
        // Create title
        const title = document.createElement("h4");
        title.textContent = project.name;
        
        // Create description
        const description = document.createElement("p");
        description.textContent = project.description;
        
        // Create empty div for icons (your existing code will fill this)
        const iconsContainer = document.createElement("div");
        
        // Assemble the card
        textContainer.appendChild(title);
        textContainer.appendChild(description);
        
        projectCard.appendChild(textContainer);
        projectCard.appendChild(iconsContainer);
        
        // Add to DOM
        adminProjectsDiv.appendChild(projectCard);
    });
}

// Call the function when page loads
createProjectCards()






/* CREATING ICONS IN PROJECT CARDS */
const projectIconDivs = document.querySelectorAll(".project-card > div:last-child");
console.log(projectIconDivs);

for (i = 0; i < projectIconDivs.length; i++) {
	const projectIconContainer = document.createElement("div");
	
	// Create icon elements using Font Awesome
	starIcon = document.createElement("i");
	starIcon.setAttribute("class", "fa-regular fa-star"); // or "fa-solid fa-star" for filled
	projectIconContainer.appendChild(starIcon);

	eyeIcon = document.createElement("i");
	eyeIcon.setAttribute("class", "fa-regular fa-eye");
	projectIconContainer.appendChild(eyeIcon);

	forkIcon = document.createElement("i");
	forkIcon.setAttribute("class", "fa-solid fa-code-fork");
	projectIconContainer.appendChild(forkIcon);

	projectIconDivs[i].appendChild(projectIconContainer);
}




/* CREATING ANNOUNCEMENT CARDS */
// Array of announcement objects
const announcements = [
    {
        title: "Site Maintenance",
        description: "Hi There, we would like to invite you to our scheduled maintenance this weekend..."
    },
    {
        title: "Community Share Day",
        description: "Join us for our monthly community share day where members showcase their projects..."
    },
    {
        title: "Updated Privacy Policy",
        description: "We've updated our privacy policy to better serve and protect our users..."
    },
    {
        title: "New Feature Release",
        description: "Check out our new dashboard features including real-time analytics and reporting..."
    },
    {
        title: "Developer Meetup",
        description: "Virtual meetup next Tuesday at 3pm EST. Guest speaker from Google will join us..."
    },
    {
        title: "Holiday Schedule",
        description: "Our support team will have reduced hours during the upcoming holiday week..."
    }
];

// Function to create announcement cards
function createAnnouncementCards() {
    const announcementCardsDiv = document.getElementById("announcement-cards");
    announcementCardsDiv.innerHTML = "";
    
    announcements.forEach(announcement => {
        // Create card
        const card = document.createElement("div");
        card.setAttribute("class", "announcement-card");
        
        // Create inner content wrapper
        const content = document.createElement("div");
        content.setAttribute("class", "card-content");
        
        // Create title
        const title = document.createElement("h5");
        title.textContent = announcement.title;
        
        // Create description
        const description = document.createElement("p");
        description.textContent = announcement.description;
        
        // Assemble
        content.appendChild(title);
        content.appendChild(description);
        card.appendChild(content);
        
        announcementCardsDiv.appendChild(card);
    });
}


createAnnouncementCards()





// Array of trending project objects
const trendingProjects = [
    {
        profilePic: "acadryx.png",
        username: "@tegan",
        projectName: "World Peace Builder"
    },
    {
        profilePic: "acadryx.png", 
        username: "@morgan",
        projectName: "Super Cool Project"
    },
    {
        profilePic: "acadryx.png",
        username: "@kendall",
        projectName: "Life Changing App"
    }
];

// Function to create trending project cards
function createTrendingProjects() {
    const trendingDiv = document.querySelector("#trending > div");
    trendingDiv.id = "trending-projects"; // Set the ID
    trendingDiv.innerHTML = ""; // Clear existing content
    
    // Loop through trending projects array
    trendingProjects.forEach(project => {
        // Create trending project card
        const projectCard = document.createElement("div");
        projectCard.setAttribute("class", "trending-project");
        
        // Create profile image
        const profileImg = document.createElement("img");
        profileImg.setAttribute("src", project.profilePic);
        profileImg.setAttribute("class", "profile-pic");
        profileImg.setAttribute("alt", project.username);
        
        // Create text container
        const textContainer = document.createElement("div");
        
        // Create username
        const username = document.createElement("h4");
        username.textContent = project.username;
        
        // Create project name
        const projectName = document.createElement("p");
        projectName.textContent = project.projectName;
        
        // Assemble
        textContainer.appendChild(username);
        textContainer.appendChild(projectName);
        
        projectCard.appendChild(profileImg);
        projectCard.appendChild(textContainer);
        
        trendingDiv.appendChild(projectCard);
    });
}

// Call the function
createTrendingProjects();

