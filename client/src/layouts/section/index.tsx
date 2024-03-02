import { FC, PropsWithChildren } from "react";

interface ISection extends PropsWithChildren {
	className?: string;
}

export const Section: FC<ISection> = ({ children, className }) => (
	<section className={`px-10 py-40 h-screen ${className}`}>{children}</section>
);
