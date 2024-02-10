import { FC, PropsWithChildren } from "react";

interface ISection extends PropsWithChildren {
	className?: string;
}

export const Section: FC<ISection> = ({ children, className }) => (
	<section className={`${className} mt-10 mb-80`}>{children}</section>
);
