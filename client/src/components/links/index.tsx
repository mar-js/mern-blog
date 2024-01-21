import { links } from "@/utils";
import { FC } from "react";
import { Link } from "wouter";

export const Links: FC = () => (
	<ul>
		{links.map(({ id, text, link }) => (
			<li>
				<Link key={id} href={link}>
					{text}
				</Link>
			</li>
		))}
	</ul>
);
