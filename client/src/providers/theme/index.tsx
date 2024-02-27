import { ThemeModel } from "@/contexts";
import { FC, PropsWithChildren, useState } from "react";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
	const [toggleThemeMode, setToggleThemeMode] = useState("light");

	const handleToggleThemeMode = () => {
		setToggleThemeMode((prev) => (prev === "light" ? "dark" : "light"));
	};

	const VALUE = {
		toggleThemeMode,
		handleToggleThemeMode,
	};

	return <ThemeModel.Provider value={VALUE}>{children}</ThemeModel.Provider>;
};
