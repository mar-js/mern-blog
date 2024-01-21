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
			className="border rounded-full p-2 border-blue-500"
		>
			{colorMode ? (
				<img src={moonImg} alt="Moon" className="object-cover w-10" />
			) : (
				<img src={sunImg} alt="Sun" className="object-cover w-10" />
			)}
		</button>
	);
};
