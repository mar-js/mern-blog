import type { IAccess } from "@/ts/interfaces";
import type { FC } from "react";

export const Access: FC<IAccess> = ({ access }) => (
	<>
		{access === "signup" && (
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
				//autoComplete="off"
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
				autoComplete="off"
			/>
		</div>
	</>
);
