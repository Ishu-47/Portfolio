import {
    Mail,
    Code2,
    Trophy,
    Laptop,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const portfolio = {
    personal: {
        firstName: "Ishu",
        lastName: "Rajora",

        fullName: "Ishu Kumar Rajora",

        title: "Full-Stack Developer & Competitive Programmer",

        subtitle:
            "Building scalable, production-ready web applications with a strong focus on backend architecture and performance.",

        description:
            "Computer Science student at IET Lucknow specializing in Java, Spring Boot, React, PostgreSQL, Redis, and Docker. Passionate about designing scalable backend systems, crafting intuitive user experiences, and writing clean, production-ready software.",

        email: "kumarrajoraishu@gmail.com",

        location: "Lucknow, India",

        resume: "/resume.pdf",
    },

    socials: [
        {
            name: "GitHub",
            icon: FaGithub,
            url: "YOUR_GITHUB_LINK",
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: "YOUR_LINKEDIN_LINK",
        },
        {
            name: "Email",
            icon: Mail,
            url: "mailto:kumarrajoraishu@gmail.com",
        },
    ],

    achievements: [
        {
            title: "Codeforces Expert",
            value: "1683",
            icon: Trophy,
        },
        {
            title: "LeetCode Knight",
            value: "2088",
            icon: Code2,
        },
        {
            title: "CodeChef 4★",
            value: "1871",
            icon: Trophy,
        },
        {
            title: "ICPC Regionalist",
            value: "2025",
            icon: Laptop,
        },
    ],

    skills: [
        "Java",
        "Spring Boot",
        "React",
        "Redis",
        "PostgreSQL",
        "Docker",
        "Tailwind CSS",
        "JWT",
        "WebSockets",
        "REST APIs",
        "Git",
        "Linux",
    ],

    projects: [
        {
            title: "Aurora",

            featured: true,

            description:
                "A production-ready social media platform supporting authentication, real-time messaging, notifications, Redis caching, Docker deployment and infinite scrolling.",

            tech: [
                "Spring Boot",
                "React",
                "Redis",
                "PostgreSQL",
                "Docker",
                "WebSocket",
            ],

            github: "",

            live: "",
        },

        {
            title: "CollabCode",

            featured: false,

            description:
                "Real-time collaborative coding platform with WebSocket synchronization and session management.",

            tech: [
                "Spring Boot",
                "React",
                "PostgreSQL",
                "WebSocket",
            ],

            github: "",

            live: "",
        },
    ],
};