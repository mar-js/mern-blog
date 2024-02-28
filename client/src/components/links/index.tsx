import { links } from "@/utils";
import { FC } from "react";
import { Link } from "wouter";

export const Links: FC = () => (
	<ul className="flex justify-center items-center max-[1000px]:w-full max-[1000px]:inline max-[1000px]:text-4xl max-[1000px]:text-center max-[1000px]:text-white">
		{links.map(({ id, text, link }) => (
			<li
				key={id}
				className="mx-2 max-[1000px]:mb-10 max-[1000px]:text-inherit"
			>
				<Link
					href={link}
					className="hover:opacity-70 max-[1000px]:flex max-[1000px]:justify-between max-[1000px]:items-center"
				>
					{text}
					<span className="hidden max-[1000px]:inline max-[1000px]:text-yellow-200">
						{">"}
					</span>
				</Link>
			</li>
		))}
	</ul>
);
