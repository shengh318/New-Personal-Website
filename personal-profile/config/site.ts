import {profile} from "console";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Next.js + NextUI",
    description: "Make beautiful websites regardless of your design experience.",
    pictures: {
        profile: "https://i.pinimg.com/736x/74/f4/f5/74f4f548392fbdafbe8a5d9764c83eaf.jpg",
        homepage: "/pictures/homepage.JPG",
        face_picture: "/pictures/face_picture.JPG",
        tweet_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFpqjxjZMT5It5r1K4KJ4ZOoTreT71ymX90TNd9VqTcts7z9_CqU0sco1jn7wYmHvo2I&usqp=CAU"
    },
    navItems: [
        {
            label: "About",
            href: "/about",
        },
        {
            label: "Experiences",
            href: "/experiences",
        },
        {
            label: "Projects",
            href: "/projects",
        },
    ],
    navMenuItems: [
        {
            label: "Profile",
            href: "/profile",
        },
        {
            label: "Dashboard",
            href: "/dashboard",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Team",
            href: "/team",
        },
        {
            label: "Calendar",
            href: "/calendar",
        },
        {
            label: "Settings",
            href: "/settings",
        },
        {
            label: "Help & Feedback",
            href: "/help-feedback",
        },
        {
            label: "Logout",
            href: "/logout",
        },
    ],
    links: {
        linkedin: "https://www.linkedin.com/in/shengh318/",
        email: "mailto:shengh@mit.edu"
    },
};
