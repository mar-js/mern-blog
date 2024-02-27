import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "./theme";
import { UsersProvider } from "./users";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
	<ThemeProvider>
		<UsersProvider>{children}</UsersProvider>
	</ThemeProvider>
);
