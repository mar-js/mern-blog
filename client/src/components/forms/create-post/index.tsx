import { BtnAction, Textarea } from "@/components";
import type { FC } from "react";

export const CreatePost: FC = () => (
	<div className="mx-auto w-6/12 flex flex-col">
		<input
			type="text"
			placeholder="Title"
			name="title"
			className="w-full p-5 border mb-5"
			required
		/>
		<select
			name="category"
			className="mb-5 p-5 border hover:opacity-70 hover:cursor-pointer"
			required
		>
			<option value="uncategorized">Select a category</option>
			<option value="asd">asd</option>
		</select>
		<input
			type="file"
			name="file"
			accept="image/*"
			className="mb-5 border file:mr-10  file:p-5 file:border-none file:outline-none file:hover:cursor-pointer file:hover:opacity-70"
		/>
		<Textarea />
		<BtnAction
			access="create-post"
			className="w-full text-cyan-500 border border-cyan-500 hover:bg-cyan-500 hover:text-white"
		/>
	</div>
);
