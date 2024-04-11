import type { ILayout } from "@/ts/interfaces";
import type { FC } from "react";

export const Section: FC<ILayout> = ({ children, className }) => (
	<section className={`px-10 py-40 h-screen ${className}`}>{children}</section>
);
