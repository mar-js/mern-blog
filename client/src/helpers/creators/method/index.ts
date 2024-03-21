export const createMethod = (access: TAccess): string => {
	let method = "";

	if (access === "signin" || access === "signup") {
		method = "POST";
	} else if (access === "update") {
		method = "PUT";
	} else {
		method = "DELETE";
	}

	return method;
};
