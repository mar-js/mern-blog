import { Forms, Title } from "@/components";
import { Section } from "@/layouts";
import { FC } from "react";

export const SignUpPage: FC = () => (
	<Section className="flex flex-wrap px-10 h-[30rem] items-center justify-evenly">
		<div className="flex flex-col">
			<Title />
			<p className="text-sm italic mt-4">
				This is demo project. You can sign up with your email and password or
				with Google
			</p>
		</div>
		<Forms />
	</Section>
);
