import user from "@/assets/user.svg";
import { FC } from "react";

export const BtnUser: FC = () => (
	<button type="button" className="object-cover ml-3 w-11 hover:opacity-70">
		<img src={user} alt="User icon" className="object-cover w-full" />
	</button>
);
