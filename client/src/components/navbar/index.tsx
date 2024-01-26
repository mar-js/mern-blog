import { BtnsSign, Links, Menu, Search, SwitchColorMode } from "@/components";
import { useDetectMobileView } from "@/hooks";
import { FC } from "react";

export const Navbar: FC = () => {
	const { detectMobileView } = useDetectMobileView();

	return (
		<nav className="flex w-full justify-between items-center">
			<Search />
			{detectMobileView ? (
				<Menu />
			) : (
				<>
					<Links />
					<div className="flex">
						<SwitchColorMode />
						<BtnsSign />
					</div>
				</>
			)}
		</nav>
	);
};
