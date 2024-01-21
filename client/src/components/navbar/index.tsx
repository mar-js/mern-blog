import { BtnsSign, Links, Search, SwitchColorMode } from "@/components";
import { FC } from "react";

export const Navbar: FC = () => (
	<nav>
		<Search />
		<Links />
		<SwitchColorMode />
		<BtnsSign />
	</nav>
);
