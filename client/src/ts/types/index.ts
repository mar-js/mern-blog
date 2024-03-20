const M = {
	Get: "GET",
	Put: "PUT",
	Post: "POST",
	Delete: "DELETE",
} as const;

const A = {
	Signin: "signin",
	Signup: "signup",
	...M,
} as const;

export type Method = typeof M;
export type Access = typeof A;
