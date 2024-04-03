import { useUsersContext } from "@/contexts";
import { IAccess } from "@/ts/interfaces";
import type { FC } from "react";
import { Access } from "./access";
import { Profile } from "./profile";

export const Forms: FC<IAccess> = ({ access }) => {
	const { handleSubmit } = useUsersContext();

	return (
		<form
			action="POST"
			onSubmit={(e) => handleSubmit(e, access)}
			className={
				access === "update" ? "w-3/4 max-[1000px]:w-full" : "w-[35rem]"
			}
		>
			{access === "update" ? <Profile /> : <Access access={access} />}
		</form>
	);
};
