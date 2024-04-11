import { Navbar, Title } from "@/components";
import type { FC } from "react";

export const Header: FC = () => (
	<header className="flex items-center w-full py-2 px-8 border-b-2">
		<Title />
		<Navbar />
	</header>
);
