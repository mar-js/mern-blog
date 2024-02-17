import { Pages } from "@/pages";
import { UsersProvider } from "@/providers";
import { FC } from "react";

export const App: FC = () => (
	<UsersProvider>
		<Pages />
	</UsersProvider>
);
