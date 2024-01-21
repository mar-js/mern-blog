import { BtnsSign, Links, Search } from "@/components";
import { FC } from "react";

export const Navbar: FC = () => (
	<nav>
		<Search />
		<Links />
		<BtnsSign />
	</nav>
);
