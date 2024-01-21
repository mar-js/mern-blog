import { BtnsSign, Links, Search, SwitchColorMode } from "@/components";
import { FC } from "react";

export const Navbar: FC = () => (
	<nav className="flex w-full justify-between items-center">
		<Search />
		<Links />
		<SwitchColorMode />
		<BtnsSign />
	</nav>
);
