export const detectMobileView = () => {
	let isMobileMediaQuery = false;
	const mobileMediaQuery: MediaQueryList = matchMedia("(max-width: 1000px)");

	mobileMediaQuery.addEventListener("change", ({ matches }) => {
		isMobileMediaQuery = matches;
	});

	return { isMobileMediaQuery };
};
