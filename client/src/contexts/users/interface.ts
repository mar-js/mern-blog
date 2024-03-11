import type { Dispatch, FormEvent } from "react";

interface IData {
	user: {
		id: string;
		username: string;
		email: string;
		createdAt: string;
		updatedAt: string;
	};
	message: string;
}

export interface IUsersModel {
	userState: {
		loading: boolean;
		data: IData | null;
		error: undefined | string;
		isLogged: boolean;
	};
	userDispatch: Dispatch<void>;
	handleSubmit: (e: FormEvent, access: string) => Promise<void>;
}
