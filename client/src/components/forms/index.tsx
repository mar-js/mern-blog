import { useUsersContext } from "@/contexts";
import { handlerSubmitUser } from "@/helpers";
import type { IAccess } from "@/ts/interfaces";
import type { FC } from "react";
import { Access } from "./access";
import { Profile } from "./profile";

export const Forms: FC<IAccess> = ({ access }) => {
	const { userDispatch, id } = useUsersContext();

	return (
		<form
			action={access === "update" ? "PUT" : "POST"}
			onSubmit={(e) => handlerSubmitUser({ e, access, userDispatch, id })}
			className={
				access === "update" ? "w-3/4 max-[1000px]:w-full" : "w-[35rem]"
			}
		>
			{access === "update" ? (
				<Profile userDispatch={userDispatch} id={id} />
			) : (
				<Access access={access} />
			)}
		</form>
	);
};
