import type { ILinks } from "@/ts/interfaces";

export const linksNavbar: ILinks[] = [
	{
		id: "home",
		text: "Home",
		link: "/",
	},
	{
		id: "about",
		text: "About",
		link: "/about",
	},
	{
		id: "projects",
		text: "Projects",
		link: "/projects",
	},
];

export const linksDashboard: ILinks[] = [
	{
		id: "dashboard",
		text: "Dashboard",
		link: "/dashboard",
	},
	{
		id: "profile",
		text: "Profile",
		link: "/dashboard?tab=profile",
	},
	{
		id: "comments",
		text: "Comments",
		link: "/comments",
	},
	{
		id: "users",
		text: "Users",
		link: "/users",
	},
	{
		id: "posts",
		text: "Posts",
		link: "/posts",
	},
];
