import { FC } from "react";
import { Link } from "wouter";

export const SignUp: FC = () => (
	<>
		<div className="flex flex-col mb-5">
			<label htmlFor="username">Your username</label>
			<input
				className="rounded-md border px-2 py-1"
				type="text"
				name="username"
				id="username"
				placeholder="Joe Doe"
			/>
		</div>
		<div className="flex flex-col mb-5">
			<label htmlFor="email">Your email</label>
			<input
				className="rounded-md border px-2 py-1"
				type="email"
				name="email"
				id="email"
				placeholder="joedoe@gmail.com"
			/>
		</div>
		<div className="flex flex-col mb-5">
			<label htmlFor="password">Your password</label>
			<input
				className="rounded-md border px-2 py-1"
				type="password"
				name="password"
				id="password"
			/>
		</div>
		<button
			className="w-full rounded-md bg-blue-500 text-white py-3 mb-2 hover:opacity-70"
			type="submit"
		>
			Sign Up
		</button>
		<p className="font-bold text-md">
			Have an account?
			<Link href="/sign-in" className="text-blue-500 ml-2">
				Sign In
			</Link>
		</p>
	</>
);
