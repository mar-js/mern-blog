import { BtnsSign, Links, Search, SwitchColorMode } from "@/components";
import { FC } from "react";

export const Navbar: FC = () => (
	<nav className="flex w-full justify-between items-center">
		<Search />
		<Links />
		<div className="flex">
			<SwitchColorMode />
			<BtnsSign />
		</div>
	</nav>
);
