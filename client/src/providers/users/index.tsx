import { UsersModel } from "@/contexts";
import { FC, PropsWithChildren } from "react";

export const UsersProvider: FC<PropsWithChildren> = ({ children }) => {
	const VALUE = {};

	return <UsersModel.Provider value={VALUE}>{children}</UsersModel.Provider>;
};
