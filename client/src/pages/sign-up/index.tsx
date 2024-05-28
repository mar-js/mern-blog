import { Forms, IntroductionSign } from "@/components";
import { Section } from "@/layouts";
import type { FC } from "react";

export const SignUpPage: FC = () => (
	<Section className="flex flex-wrap h-[30rem] items-start justify-evenly">
		<IntroductionSign sign="Up" />
		<Forms access="signup" />
	</Section>
);
