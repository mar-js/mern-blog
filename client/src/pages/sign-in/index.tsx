import { Forms, IntroductionSign } from "@/components";
import { Section } from "@/layouts";
import type { FC } from "react";

export const SignInPage: FC = () => (
	<Section className="flex flex-wrap h-[30rem] items-start justify-evenly">
		<IntroductionSign sign="In" />
		<Forms access="signin" />
	</Section>
);
