export const createEndpoint = (access: TAccess, id: string): string => {
	let endpoint = "";

	if (access === "signin" || access === "signup") {
		endpoint = `/auth/${access}`;
	} else {
		endpoint = `/users/${access}/${id}`;
	}

	return endpoint;
};
