import { LinksDashboard } from "@/components";
import type { ILayout } from "@/ts/interfaces";
import type { FC } from "react";

export const Aside: FC<ILayout> = ({ className }) => (
	<aside className={`px-10 pb-20 ${className || ""}`}>
		<LinksDashboard />
	</aside>
);
