import { FC, FormEvent } from "react";
import { SignUp } from "./sign-up";

export const Forms: FC = () => {
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const TARGET = e.target as HTMLFormElement;
		const DATA = Object.fromEntries(new FormData(TARGET));

		try {
			const RESPONSE = await fetch("/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(DATA),
			});
			const RESPONSE_DATA = await RESPONSE.json();

			console.log(RESPONSE_DATA);
		} catch (error) {
			console.log("A", error);
		}
	};

	return (
		<form action="POST" onSubmit={handleSubmit} className="w-[35rem]">
			<SignUp />
		</form>
	);
};
