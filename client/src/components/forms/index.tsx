import { FC, FormEvent } from "react";
import { navigate } from "wouter/use-location";
import { Access } from "./access";

interface IForms {
	isSignUp?: boolean;
}

export const Forms: FC<IForms> = ({ isSignUp }) => {
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const TARGET = e.target as HTMLFormElement;
		const DATA = Object.fromEntries(new FormData(TARGET));

		const RESPONSE = await fetch(
			`/api/auth/${isSignUp ? "signup" : "signin"}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(DATA),
			},
		);
		const RESPONSE_DATA = await RESPONSE.json();

		if (RESPONSE.ok) {
			return navigate(isSignUp ? "/sign-in" : "/");
		}

		return navigate("/error");
	};
	return (
		<form action="POST" onSubmit={handleSubmit} className="w-[35rem]">
			<Access isSignUp={isSignUp} />
		</form>
	);
};
