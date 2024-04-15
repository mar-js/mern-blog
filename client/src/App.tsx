import { Pages } from "@/pages";
import { Providers } from "@/providers";
import type { FC } from "react";

export const App: FC = () => (
	<Providers>
		<Pages />
	</Providers>
);
