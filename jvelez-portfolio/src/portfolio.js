

const settings = {
    isSplash: false, 

    useCustomCursor: false,
};

const greeting = {
    title: "Hello.",
    title2: "Jesus",
    logo_name: "jesus.v()",
    nickname: "jvelezfd",
    subTitle: 
    "Full Stack Developer, Gamer, and Artist. We are always learning.",

    resumeLink: "https://drive.google.com/file/d/15yObUP2aK-ncIojno4sWBFgwKeRukSKC/view",
    mail: "mailto:jvelez117@gmail.com",
};

const socialMediaLinks = {
    github: "https://github.com/JVelezFD",
    linkedin: "https://www.linkedin.com/in/j-velez-fiserv/",
    gmail: "jvelez117@gmail.com",
    gitlab: " ",
    facebook: " ",
    twitter: " ",
    instagram: " ",
};

const skills = {
    data: [
        {
            title: "Full Stack Development",
            fileName: "FullStackImg",
            skills: [
                "⚡ Building responsive website front end using ReactJS",
                "⚡ Creating application backend in Node, MongoDB, & Express" ,
            ],
            softwareSkills: [
                {
                    skillName: "HTML5",
                    fontAwesomeClassname: "simple-icons:html5",
                    style: {
                        color: "#E34F26",
                    },
                },
                {
                    skillName: "CSS",
                    fontAwesomeClassname: "fa-css3",
                    style: {
                        color: "1572B6",
                    },
                },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname:"simple-icons:javascript",
                    style: {
                        backgroundColor: "#FFFFFF",
                        color: "#F7DF1E",
                    },
                },
                {
                    skillName: "ReactJS",
                    fontAwesomeClassname: "simple-icons:react",
                    style: {
                        color: "#61DAFB",
                    },
                },
                {
                    skillName: "NodeJS",
                    fontAwesomeClassname: "simple-icons:node-dot-js",
                    style: {
                        color: "#339933",
                    },
                },
                {
                    skillName: "MongoDB",
                    fontAwesomeClassname: "simple-icons:mongodb",
                    style: {
                        color: "#47A248",
                    },

                },
                {
                    skillName: "MySQL",
                    fontAwesomeClassname: "simple-icons:mysql",
                    style:{
                        color: "#1488C6",
                    },
                },
            ],
        },
    ],
};

const certifications= {
    certifications:[
        {
            title: "Georgia Tech Full Stack Development",
            subTitle: "MERN Stack",
            logo_path: " ",
            certificate_link: " ",
            alt_name: "GT Full Stack Development",
            color_code: "#47A048",
        },
    ],
};

const projectsHeader= {
    title: "Projects",
    description:  "My projects makes use of vast variety of latest technology tools. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
    avatar_image_path: "projects_image.svg",
};

const contactPageData = {
    constactSection: {
        title: "Contact Me",
        profile_image_path: "profilepic.png",
        description: "You can contact me at the places mentioned below or via the form below. I will do my best to get back to you as fast as possible",

    },
};

const projects = {
    data: [
        {
            id: "1",
            name: "MealFinder",
            url: "https://github.com/JVelezFD/MealFinder",
            description: "A webapp to help find a meal to cook based on options chosen: Breakfast, Lunch, Dinner",
            languages: [
                {
                    name: "HTML",
                    iconifyClass: "logos-html",
                },
                {
                    name: "CSS",
                    iconifyClass: "logos-css",
                },
                {
                    name: "JS",
                    iconifyClass: "logos-javascript",
                },
            ],
        },

        {
            id: "2",
            name: "Smash.Me",
            url: "https://github.com/gabeab34/Smash.ME",
            description: "The app will allow users to create esports profiles to share with potential recruiters for collegiate esports scholarship opportunities",
            languages: [
                {
                    name: "HTML",
                    iconifyClass: "logos-html",
                },
                {
                    name: "CSS",
                    iconifyClass: "logos-css",
                },
                {
                    name: "JS",
                    iconifyClass: "logos-javascript",
                },
                {
                    name: "Handlebars",
                    iconifyClass: "logos-handlebars",
                },
                {
                    name: "MySQL",
                    iconifyClass: "logos-mysql",
                },
            ],
        },
    ],
};

export { 
    settings, 
    greeting, 
    socialMediaLinks,
    skills,
    certifications,
    projectsHeader,
    contactPageData,
    projects,
};