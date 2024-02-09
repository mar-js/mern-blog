import { FC } from "react";
import { SignUp } from "./sign-up";

export const Forms: FC = () => {
	return (
		<form action="POST" className="w-[35rem]">
			<SignUp />
		</form>
	);
};
