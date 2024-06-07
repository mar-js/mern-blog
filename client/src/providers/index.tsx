import type { FC, PropsWithChildren } from "react";
import { PostsProvider } from "./posts";
import { ThemeProvider } from "./theme";
import { UsersProvider } from "./users";

export const Providers: FC<PropsWithChildren> = ({ children }) => (
	<ThemeProvider>
		<UsersProvider>
			<PostsProvider>{children}</PostsProvider>
		</UsersProvider>
	</ThemeProvider>
);
