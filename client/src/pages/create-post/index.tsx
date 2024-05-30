import { Forms } from "@/components";
import { Section } from "@/layouts";
import type { FC } from "react";

export const CreatePostPage: FC = () => (
	<Section>
		<Forms access="create-post" isWidthFull />
	</Section>
);
