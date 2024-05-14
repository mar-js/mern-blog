import type { IBtnAction } from "@/ts/interfaces";
import type { FC } from "react";

export const BtnAction: FC<IBtnAction> = ({ access, className }) => {
	const text =
		access === "signin"
			? "Sign In"
			: access === "signup"
				? "Sign Up"
				: access === "signout"
					? "Sign Out"
					: access === "delete"
						? "Delete Account"
						: "Update Account";

	return (
		<button
			id={access}
			className={`w-auto py-2 px-4 ${className}`}
			type="submit"
		>
			{text}
		</button>
	);
};
