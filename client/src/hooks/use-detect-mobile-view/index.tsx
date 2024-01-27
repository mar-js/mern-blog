import { useEffect, useState } from "react";

export const useDetectMobileView = () => {
	const [detectMobileView, setDetectMobileView] = useState(false);
	const mobileMediaQuery: MediaQueryList = matchMedia("(max-width: 1000px)");

	const handleChange = (e: MediaQueryListEvent) => {
		setDetectMobileView(Boolean(e.matches));
	};

	const handleLoad = () => {
		setDetectMobileView(mobileMediaQuery.matches);
	};

	useEffect(() => {
		// CHANGES WHEN LOAD PAGE
		window.addEventListener("load", handleLoad);

		// CHANGES WHEN RESIZE PAGE
		mobileMediaQuery.addEventListener("change", handleChange);

		return () => {
			window.removeEventListener("load", handleLoad);
			mobileMediaQuery.removeEventListener("change", handleChange);
		};
	}, [detectMobileView]);

	return { detectMobileView };
};
