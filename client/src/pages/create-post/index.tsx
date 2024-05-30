import { Forms, Subtitle } from "@/components";
import { Section } from "@/layouts";
import type { FC } from "react";

export const CreatePostPage: FC = () => (
	<Section>
		<Subtitle text="Create post" />
		<Forms access="create-post" isWidthFull />
	</Section>
);
