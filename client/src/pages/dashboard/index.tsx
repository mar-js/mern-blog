import { Forms, Subtitle } from "@/components";
import { useUsersContext } from "@/contexts";
import { Section } from "@/layouts";
import type { FC } from "react";
import { navigate } from "wouter/use-location";

export const DashboardPage: FC = () => {
	const { userState } = useUsersContext();

	if (!userState.isLogged) navigate("/");

	return (
		<Section className="flex flex-col place-items-center">
			<Subtitle text="Profile" />
			<Forms access="update" />
		</Section>
	);
};
