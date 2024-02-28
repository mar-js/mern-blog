import { ThemeModel } from "@/contexts";
import { FC, PropsWithChildren, useEffect, useState } from "react";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [themeMode, setThemeMode] = useState("light");
	const BODY = document.body;

	const handleToggleThemeMode = () => {
		setThemeMode((prev) => {
			BODY?.classList.remove(prev);

			return prev === "light" ? "dark" : "light";
		});
	};

	useEffect(() => {
		BODY?.classList.add(themeMode);
	}, [BODY, themeMode]);

	const VALUE = {
		themeMode,
		handleToggleThemeMode,
	};

	return <ThemeModel.Provider value={VALUE}>{children}</ThemeModel.Provider>;
};
