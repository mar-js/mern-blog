import { links } from "@/utils";
import { FC } from "react";
import { Link } from "wouter";

export const Links: FC = () => (
	<ul className="flex justify-center items-center text-gray-500">
		{links.map(({ id, text, link }) => (
			<li className="m-1">
				<Link key={id} href={link}>
					{text}
				</Link>
			</li>
		))}
	</ul>
);
