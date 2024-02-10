import { FC } from "react";

export const Copyright: FC = () => (
	<span className="text-gray-400 text-sm">
		© {new Date().getFullYear()} mar-js
	</span>
);
