import user from "@/assets/user.svg";
import { useUsersContext } from "@/contexts";
import { type FC, useState } from "react";
import { Link } from "wouter";

export const BtnUser: FC = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const {
		userState: { data },
	} = useUsersContext();
	const { username, email } = data?.user || {};

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
					<div className="flex flex-col">
						<Link
							href="/dashboard?tab=profile"
							className="p-2 hover:text-white hover:bg-blue-500"
						>
							Profile
						</Link>
						<button
							type="button"
							className="text-left p-2 hover:text-white hover:bg-blue-500"
						>
							Sign out
						</button>
					</div>
				</div>
			)}
		</>
	);
};
