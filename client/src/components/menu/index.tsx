import menu from "@/assets/menu.svg";
import { BtnsSign, LinksNavbar, SwitchColorMode } from "@/components";
import { useThemeContext } from "@/contexts";
import { type FC, useState } from "react";

let previousUrl = location.href;

export const Menu: FC = () => {
	const [showMenu, setShowMenu] = useState(false);
	const {
		themeMode: { showDarkMode },
	} = useThemeContext();

	const handleClick = () => {
		setShowMenu((prev) => !prev);
	};

	const observer = new MutationObserver(() => {
		// If URL changes...
		if (location.href !== previousUrl) {
			previousUrl = location.href;

			// Close popup
			handleClick();

			// Once navigation is detected, disconnect mutation observer
			observer.disconnect();
		}
	});
	// Mutation observer setup
	const config = { subtree: true, childList: true };
	observer.observe(document, config);

	return (
		<>
			<button type="button" onClick={handleClick} className="w-6">
				<img
					src={menu}
					alt="Menu"
					className={`object-cover w-full ${showDarkMode && "invert"}`}
				/>
			</button>
			{showMenu && (
				<div className="absolute top-0 left-0 w-full h-full bg-blue-500 flex flex-col justify-start items-center py-40  px-10">
					<button
						className="absolute top-4 right-10 text-8xl text-white font-bold"
						type="button"
						onClick={handleClick}
					>
						x
					</button>
					<SwitchColorMode />
					<LinksNavbar />
					<BtnsSign />
				</div>
			)}
		</>
	);
};
