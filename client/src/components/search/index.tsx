import { FC } from "react";

export const Search: FC = () => (
	<form action="GET" className="w-auto h-auto">
		<input
			type="search"
			name="search"
			id="search"
			className="px-3 py-2 rounded-md text-md placeholder-gray-500 outline outline-1 outline-gray-300 focus-within:shadow-md focus-within:shadow-gray-400 focus-within:outline-none"
			placeholder="Search..."
		/>
	</form>
);
