import type { ISubtitle } from "@/ts/interfaces";
import type { FC } from "react";

export const Subtitle: FC<ISubtitle> = ({ text }) => (
	<h2 className="text-4xl text-center mb-10">{text}</h2>
);
