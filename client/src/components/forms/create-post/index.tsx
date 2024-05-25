import { Textarea } from "@/components";
import type { FC } from "react";

export const CreatePost: FC = () => (
	<div>
		<input type="text" placeholder="Title" />
		<select name="categories">
			<option value="uncategorized">Select a category</option>
			<option value="asd">asd</option>
		</select>
		<input type="file" name="file" />
		<br />
		<Textarea />
	</div>
);
