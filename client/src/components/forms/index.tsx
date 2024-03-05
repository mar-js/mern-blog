import { useUsersContext } from "@/contexts";
import type { FC } from "react";
import { Access } from "./access";
import { Profile } from "./profile";

interface IForms {
	access: "signin" | "signup" | "update";
}

export const Forms: FC<IForms> = ({ access }) => {
	const { handleSubmit } = useUsersContext();

	return (
		<form
			action="POST"
			onSubmit={(e) => handleSubmit(e, access)}
			className={
				access === "update" ? "w-3/4 max-[1000px]:w-full" : "w-[35rem]"
			}
		>
			{access === "update" ? <Profile /> : <Access action={access} />}
		</form>
	);
};
