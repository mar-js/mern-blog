import { FC } from "react";
import { Link } from "wouter";

export const BtnsSign: FC = () => (
	<div className="flex justify-center items-center font-bold max-[1000px]:flex-col max-[1000px]:mt-10 max-[1000px]:text-4xl max-[1000px]:w-full max-[1000px]:text-center">
		<Link
			href="/signin"
			className="ml-4 hover:opacity-70 max-[1000px]:mb-10 max-[1000px]:w-full max-[1000px]:ml-0 max-[1000px]:text-white max-[1000px]:border-2 max-[1000px]:rounded-2xl max-[1000px]:py-4"
		>
			Sign In
		</Link>
		<Link
			href="/signup"
			className="ml-4 border-2 rounded-md py-2 px-4 hover:opacity-70 max-[1000px]:w-full max-[1000px]:ml-0 max-[1000px]:border-none max-[1000px]:bg-white max-[1000px]:text-blue-500 max-[1000px]:py-4"
		>
			Sign Up
		</Link>
	</div>
);
