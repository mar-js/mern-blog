import moonImg from "@/assets/moon.png";
import sunImg from "@/assets/sun.png";
import { FC, useState } from "react";

export const SwitchColorMode: FC = () => {
	const [colorMode, setColorMode] = useState(false);

	const handleChangeColorMode = () => {
		setColorMode((prev) => !prev);
	};

	return (
		<button
			type="button"
			onClick={handleChangeColorMode}
			className="border rounded-full p-2 border-blue-500 hover:opacity-70 w-6 max-[1000px]:mb-20 max-[1000px]:p-0 max-[1000px]:w-24 max-[1000px]:border-none"
		>
			{colorMode ? (
				<img src={moonImg} alt="Moon" className="object-cover w-full" />
			) : (
				<img src={sunImg} alt="Sun" className="object-cover w-full" />
			)}
		</button>
	);
};
