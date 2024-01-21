import { FC } from "react";

export const BtnsSign: FC = () => (
	<div className="flex justify-center items-center font-bold text-gray-400">
		<button type="button" className="">
			Sign In
		</button>
		<button type="button" className="ml-4 border rounded-2xl py-2 px-4">
			Sign Up
		</button>
	</div>
);
