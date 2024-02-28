import moonImg from "@/assets/moon.png";
import sunImg from "@/assets/sun.png";
import { useThemeContext } from "@/contexts";
import { FC } from "react";

export const SwitchColorMode: FC = () => {
	const {
		handleToggleThemeMode,
		themeMode: { showDarkMode },
	} = useThemeContext();

	const handleChangeColorMode = () => {
		handleToggleThemeMode();
	};

	return (
		<button
			type="button"
			onClick={handleChangeColorMode}
			className="border-2 rounded-full p-2 border-blue-500 hover:opacity-70 w-11 max-[1000px]:mb-20 max-[1000px]:p-0 max-[1000px]:w-24 max-[1000px]:border-none"
		>
			{showDarkMode ? (
				<img src={moonImg} alt="Moon" className="object-cover w-full" />
			) : (
				<img src={sunImg} alt="Sun" className="object-cover w-full" />
			)}
		</button>
	);
};
