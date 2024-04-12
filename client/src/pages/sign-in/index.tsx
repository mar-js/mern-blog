import { Forms, Title } from "@/components";
import { Section } from "@/layouts";
import type { FC } from "react";

export const SignInPage: FC = () => (
	<Section className="flex flex-wrap h-[30rem] items-start justify-evenly">
		<div className="flex flex-col">
			<Title />
			<p className="text-sm italic mt-4">
				This is demo project. You can sign in with your email and password or
				with Google
			</p>
		</div>
		<Forms access="signin" />
	</Section>
);
