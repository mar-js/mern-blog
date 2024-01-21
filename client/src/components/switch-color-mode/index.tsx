import moonImg from "@/assets/moon.png";
import sunImg from "@/assets/sun.png";
import { FC, useState } from "react";

export const SwitchColorMode: FC = () => {
	const [colorMode, setColorMode] = useState(false);

	const handleChangeColorMode = () => {
		setColorMode((prev) => !prev);
	};

	return (
		<button type="button" onClick={handleChangeColorMode}>
			{colorMode ? (
				<img src={moonImg} alt="Moon" />
			) : (
				<img src={sunImg} alt="Sun" />
			)}
		</button>
	);
};
