import {
	BtnUser,
	BtnsSign,
	Links,
	Menu,
	Search,
	SwitchColorMode,
} from "@/components";
import { useUsersContext } from "@/contexts";
import { useDetectMobileView } from "@/hooks";
import { FC } from "react";

export const Navbar: FC = () => {
	const { detectMobileView } = useDetectMobileView();
	const { isLogged } = useUsersContext();

	return (
		<nav className="flex w-full justify-between items-center">
			<Search />
			{detectMobileView ? (
				<Menu />
			) : (
				<>
					<Links />
					<div className="flex relative">
						<SwitchColorMode />
						{isLogged ? <BtnUser /> : <BtnsSign />}
					</div>
				</>
			)}
		</nav>
	);
};
