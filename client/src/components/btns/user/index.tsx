import user from "@/assets/user.svg";
import { Forms } from "@/components";
import { useUsersContext } from "@/contexts";
import { type FC, useState } from "react";

export const BtnUser: FC = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const {
		userState: { data },
	} = useUsersContext();
	const { username, email } = data || {};

	const handleClick = () => {
		setShowDropdown((prev) => !prev);
	};

	return (
		<>
			<button
				type="button"
				className="object-cover ml-3 w-11 hover:opacity-70"
				onClick={handleClick}
			>
				<img src={user} alt="User icon" className="object-cover w-full" />
			</button>
			{showDropdown && (
				<div className="object-cover absolute top-12 right-0 border-2 bg-white">
					<div className="border-b-2 px-2 py-4">
						<h6>
							{username} {email}
						</h6>
					</div>
					<Forms access="profile" isWidthFull />
				</div>
			)}
		</>
	);
};
