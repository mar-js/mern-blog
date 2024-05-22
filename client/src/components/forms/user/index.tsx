import { BtnAction } from "@/components/btns";
import type { FC } from "react";
import { Link } from "wouter";

export const User: FC = () => (
	<div className="flex flex-col">
		<Link
			href="/dashboard?tab=profile"
			className="py-2 px-4 hover:text-white hover:bg-blue-500"
		>
			Profile
		</Link>
		<BtnAction
			access="signout"
			className="text-left hover:text-white hover:bg-blue-500"
		/>
	</div>
);
