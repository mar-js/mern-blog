import { FC } from "react";

export const Profile: FC = () => {
	return (
		<div className="w-3/4 max-[1000px]:w-full flex justify-center items-center flex-col">
			<h3 className="text-3xl mb-10">Profile</h3>
			<div className="flex flex-col w-full mb-10">
				<input
					className="mb-6 outline outline-1 outline-gray-300 focus-within:shadow-md focus-within:shadow-gray-400 focus-within:outline-none p-2"
					placeholder="a"
					type="text"
					name=""
					id=""
				/>
				<input
					className="mb-6 outline outline-1 outline-gray-300 focus-within:shadow-md focus-within:shadow-gray-400 focus-within:outline-none p-2"
					placeholder="b"
					type="text"
					name=""
					id=""
				/>
				<input
					className="mb-6 outline outline-1 outline-gray-300 focus-within:shadow-md focus-within:shadow-gray-400 focus-within:outline-none p-2"
					placeholder="c"
					type="text"
					name=""
					id=""
				/>
				<button
					className="border p-2 hover:opacity-70 hover:border-blue-500"
					type="submit"
				>
					Update
				</button>
			</div>
			<div className="flex justify-between items-center w-full">
				<button className="text-red-500 hover:opacity-70" type="button">
					Delete Account
				</button>
				<button className="text-red-500 hover:opacity-70" type="button">
					Sign Out
				</button>
			</div>
		</div>
	);
};
