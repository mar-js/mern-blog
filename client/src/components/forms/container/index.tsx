import { Access, BtnAction, CreatePost, Profile, User } from "@/components";
import { useUsersContext } from "@/contexts";
import { createMethod, handlerSubmitUser } from "@/helpers";
import type { IForms } from "@/ts/interfaces";
import type { FC } from "react";

export const Forms: FC<IForms> = ({ access, isWidthFull }) => {
	const { userDispatch, id } = useUsersContext();
	const METHOD = createMethod(access);

	return (
		<form
			action={METHOD}
			onSubmit={(e) => handlerSubmitUser({ e, userDispatch, id })}
			className={isWidthFull ? "w-full" : "w-2/3 max-[1000px]:w-full"}
		>
			{access === "create-post" ? (
				<CreatePost />
			) : access === "profile" ? (
				<User />
			) : access === "update" ? (
				<>
					<Profile />
					<BtnAction
						access="update"
						className="w-full mb-4 text-green-500 border border-green-500 hover:bg-green-500 hover:text-white"
					/>
					<div className="flex items-center justify-between">
						<BtnAction
							access="delete"
							className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white"
						/>
						<BtnAction
							access="signout"
							className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white"
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
