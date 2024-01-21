import { Search } from "@/components";
import { links } from "@/utils";
import { FC } from "react";
import { Link } from "wouter";

export const Navbar: FC = () => (
	<nav>
		<Search />
		{links.map(({ id, text, link }) => (
			<Link key={id} href={link}>
				<b>{text}</b>
			</Link>
		))}
	</nav>
);
