import {profile} from "console";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Next.js + NextUI",
    description: "Make beautiful websites regardless of your design experience.",
    pictures: {
        profile: "https://i.pinimg.com/736x/74/f4/f5/74f4f548392fbdafbe8a5d9764c83eaf.jpg",
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
