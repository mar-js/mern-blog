import { ThemeModel } from "@/contexts";
import { FC, PropsWithChildren, useEffect, useState } from "react";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [themeMode, setThemeMode] = useState("light");
	const ROOT = document.getElementById("root");

	const handleToggleThemeMode = () => {
		setThemeMode((prev) => {
			ROOT?.classList.remove(prev);

			return prev === "light" ? "dark" : "light";
		});
	};

	useEffect(() => {
		ROOT?.classList.add(themeMode);
	}, [ROOT, themeMode]);

	const VALUE = {
		themeMode,
		handleToggleThemeMode,
	};

	return <ThemeModel.Provider value={VALUE}>{children}</ThemeModel.Provider>;
};
