import { Navbar, Title } from "@/components";
import { FC } from "react";

export const Header: FC = () => (
	<header className="flex items-center w-full py-2 px-8 border-b-2 mb-10">
		<Title />
		<Navbar />
	</header>
);
