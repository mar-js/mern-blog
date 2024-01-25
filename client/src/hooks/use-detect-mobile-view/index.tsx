import { useEffect, useState } from "react";

export const useDetectMobileView = () => {
	const [detectMobileView, setDetectMobileView] = useState(false);
	const mobileMediaQuery: MediaQueryList = matchMedia("(max-width: 1000px)");

	const handleChange = (e: MediaQueryListEvent) => {
		setDetectMobileView(Boolean(e.matches));
		console.log("BB", e.matches);
	};

	useEffect(() => {
		mobileMediaQuery.addEventListener("change", handleChange);

		return () => {
			mobileMediaQuery.removeEventListener("change", handleChange);
		};
	}, [detectMobileView]);

	return { detectMobileView };
};
