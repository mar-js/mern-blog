import type { IUseTextarea } from "@/ts/interfaces";
import {
	type ChangeEvent,
	type FormEvent,
	type MouseEvent,
	useRef,
	useState,
} from "react";

export const useTextarea = (): IUseTextarea => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);
	const [styles, setStyles] = useState({
		size: 14,
		uppercase: false,
		color: "#000000",
	});

	const handlerSize = (e: ChangeEvent<HTMLInputElement>) => {
		setStyles((prev) => ({ ...prev, size: Number(e.target.value) }));

		if (!textareaRef.current) return;

		textareaRef.current.style.fontSize = `${styles.size}px`;
	};

	const handlerFontWeight = (e: MouseEvent<HTMLButtonElement>) => {
		if (!textareaRef.current) return;

		const idElement = (e.target as HTMLImageElement).id;

		if (!idElement) return;

		if (idElement === "bold") {
			if (textareaRef.current.style.fontWeight.length) {
				textareaRef.current.style.fontWeight = "";

				return;
			}

			textareaRef.current.style.fontWeight = "bold";

			return;
		}

		if (idElement === "underline") {
			if (textareaRef.current.style.textDecoration.length) {
				textareaRef.current.style.textDecoration = "";

				return;
			}

			textareaRef.current.style.textDecoration = "underline";

			return;
		}

		if (idElement === "italic") {
			if (textareaRef.current.style.fontStyle.length) {
				textareaRef.current.style.fontStyle = "";

				return;
			}

			textareaRef.current.style.fontStyle = "italic";

			return;
		}
	};

	const handlerAlign = (e: MouseEvent<HTMLButtonElement>) => {
		if (!textareaRef.current) return;

		const idElement = (e.target as HTMLImageElement).id;

		if (!idElement) return;

		if (textareaRef.current.style.textAlign.length) {
			textareaRef.current.style.textAlign = "";

			return;
		}

		textareaRef.current.style.textAlign = idElement;

		return;
	};

	const handlerTextTransform = () => {
		setStyles((prev) => ({ ...prev, uppercase: !prev.uppercase }));

		if (!textareaRef.current) return;

		if (textareaRef.current.style.textTransform.length) {
			textareaRef.current.style.textTransform = "";

			return;
		}

		textareaRef.current.style.textTransform = "uppercase";

		return;
	};

	const handlerColor = (e: FormEvent<HTMLInputElement>) => {
		if (!textareaRef.current) return;

		setStyles((prev) => ({
			...prev,
			color: (e.target as unknown as { value: string }).value,
		}));

		textareaRef.current.style.color = styles.color;

		return;
	};

	return {
		textareaRef,
		styles,
		handlerSize,
		handlerFontWeight,
		handlerAlign,
		handlerTextTransform,
		handlerColor,
	};
};
