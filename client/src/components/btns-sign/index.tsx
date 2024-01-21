import { FC } from "react";
import { Link } from "wouter";

export const BtnsSign: FC = () => (
	<div className="flex justify-center items-center font-bold text-gray-400">
		<Link href="/sign-in" className="ml-4 hover:opacity-70">
			Sign In
		</Link>
		<Link
			href="/sign-up"
			className="ml-4 border-2 rounded-2xl py-2 px-4 hover:opacity-70"
		>
			Sign Up
		</Link>
	</div>
);
