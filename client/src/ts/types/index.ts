const M = {
	Get: "GET",
	Put: "PUT",
	Post: "POST",
	Delete: "DELETE",
} as const;

const A = {
	Signin: "signin",
	Signup: "signup",
} as const;

const Cm = {
	Dark: "dark",
	Light: "light",
} as const;

export type Method = typeof M;

export type Access = typeof A;

export type ColorMode = typeof Cm;
