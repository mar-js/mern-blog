import { FC } from "react";
import { Link } from "wouter";

export const Title: FC = () => (
	<h1 className="w-80 text-3xl font-bold text-blue-400">
		<Link href="/">MERN Blog</Link>
	</h1>
);
