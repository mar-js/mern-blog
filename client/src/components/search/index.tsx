import { FC } from "react";

export const Search: FC = () => (
	<form action="GET" className="w-auto h-auto">
		<input
			type="search"
			name="search"
			id="search"
			className="px-3 py-2 rounded-2xl text-xl text-white bg-red-200"
			placeholder="Search..."
		/>
	</form>
);
