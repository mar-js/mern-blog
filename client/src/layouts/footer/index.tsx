import { Copyright, Title } from "@/components";
import { FC } from "react";

export const Footer: FC = () => (
	<footer className="border-t-8 border-blue-200 p-8 flex justify-between items-center">
		<Title />
		<Copyright />
	</footer>
);
