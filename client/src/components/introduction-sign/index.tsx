import { Title } from "@/components";
import type { IIntroductionSign } from "@/ts/interfaces";
import type { FC } from "react";

export const IntroductionSign: FC<IIntroductionSign> = ({ sign }) => (
	<div className="flex flex-col px-2">
		<Title />
		<p className="text-sm italic mt-4">
			This is demo project. You can Sign {sign} with your email and password or
			with Google
		</p>
	</div>
);
