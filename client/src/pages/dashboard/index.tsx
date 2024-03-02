import { Forms } from "@/components";
import { useUsersContext } from "@/contexts";
import { Section } from "@/layouts";
import { FC } from "react";
import { navigate } from "wouter/use-location";

export const DashboardPage: FC = () => {
	const { userState } = useUsersContext();

	if (!userState.isLogged) navigate("/");

	return (
		<Section className="flex justify-center items-start">
			<Forms access="update" />
		</Section>
	);
};
