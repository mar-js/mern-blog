import { Access, BtnAction, Profile } from "@/components";
import { useUsersContext } from "@/contexts";
import { createMethod, handlerSubmitUser } from "@/helpers";
import type { IAccess } from "@/ts/interfaces";
import type { FC } from "react";

export const Forms: FC<IAccess> = ({ access }) => {
	const { userDispatch, id } = useUsersContext();
	const METHOD = createMethod(access);

	return (
		<form
			action={METHOD}
			onSubmit={(e) => handlerSubmitUser({ e, userDispatch, id })}
			className={
				access === "update" ? "w-3/4 max-[1000px]:w-full" : "w-[35rem]"
			}
		>
			{access === "update" ? (
				<>
					<Profile />
					<div className="flex items-center justify-between">
						<BtnAction
							access="delete"
							className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white"
						/>
						<BtnAction
							access="update"
							className="text-green-500 border border-green-500 hover:bg-green-500 hover:text-white"
						/>
					</div>
				</>
			) : (
				<>
					<Access access={access} />
					<BtnAction
						access={access}
						className="w-full text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white"
					/>
				</>
			)}
		</form>
	);
};
