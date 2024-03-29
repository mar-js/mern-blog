import { FC } from "react";
import { Link } from "wouter";

interface IAccess {
	action: "signin" | "signup";
}

export const Access: FC<IAccess> = ({ action }) => (
	<>
		{action === "signup" && (
			<div className="flex flex-col mb-5">
				<label htmlFor="username">Your username</label>
				<input
					className="rounded-md border px-2 py-1"
					type="text"
					name="username"
					id="username"
					placeholder="Joe Doe"
					required
				/>
			</div>
		)}
		<div className="flex flex-col mb-5">
			<label htmlFor="email">Your email</label>
			<input
				className="rounded-md border px-2 py-1"
				type="email"
				name="email"
				id="email"
				placeholder="joedoe@gmail.com"
				required
			/>
		</div>
		<div className="flex flex-col mb-5">
			<label htmlFor="password">Your password</label>
			<input
				className="rounded-md border px-2 py-1"
				type="password"
				name="password"
				id="password"
				placeholder="**********"
				required
			/>
		</div>
		<button
			className="w-full rounded-md bg-blue-500 text-white py-3 mb-2 hover:opacity-70"
			type="submit"
		>
			{action === "signup" ? "Sign Up" : "Sign In"}
		</button>
		<p className="font-bold text-md">
			{action === "signup" ? "Have an account?" : "Dont have an account"}
			<Link
				href={action !== "signup" ? "/signup" : "/signin"}
				className="text-blue-500 ml-2"
			>
				{action !== "signup" ? "Sign Up" : "Sign In"}
			</Link>
		</p>
	</>
);
