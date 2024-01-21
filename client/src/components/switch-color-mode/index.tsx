import { FC, useState } from "react";

const moonImg = "@/assets/moon.png";
const sunImg = "@/assets/sun.png";

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
