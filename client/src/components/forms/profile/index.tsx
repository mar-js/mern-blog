import { useUsersContext } from "@/contexts";
import type { FC } from "react";

export const Profile: FC = () => {
	const {
		userState: { data },
	} = useUsersContext();
	const { username, email } = data || {};

	return (
		<div className="w-full flex justify-center items-center flex-col">
			<div className="flex flex-col w-full">
				<input
					className="mb-4 outline outline-1 outline-gray-300 focus-within:shadow-md focus-within:shadow-gray-400 focus-within:outline-none p-2"
					name="username"
					placeholder={username}
					type="text"
				/>
				<input
					className="mb-4 outline outline-1 outline-gray-300 focus-within:shadow-md focus-within:shadow-gray-400 focus-within:outline-none p-2"
					name="email"
					placeholder={email}
					type="text"
				/>
				<input
					className="mb-4 outline outline-1 outline-gray-300 focus-within:shadow-md focus-within:shadow-gray-400 focus-within:outline-none p-2"
					placeholder="******"
					name="password"
					autoComplete="off"
					type="text"
				/>
			</div>
		</div>
	);
};
