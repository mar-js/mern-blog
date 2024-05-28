import type { IUseTextarea } from "@/ts/interfaces";
import { type ChangeEvent, type MouseEvent, useRef, useState } from "react";

export const useTextarea = (): IUseTextarea => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);
	const [styles, setStyles] = useState({
		size: "14",
		uppercase: false,
		color: "#000000",
	});

	const handlerSize = (e: ChangeEvent<HTMLInputElement>) => {
		if (!textareaRef.current) return;

		setStyles((prev) => ({ ...prev, size: e.target.value }));

		if (textareaRef.current.style.fontSize.length) {
			textareaRef.current.style.fontSize = "";
		} else {
			textareaRef.current.style.fontSize = `${styles.size}px`;
		}
	};

	const handlerFontWeight = (e: MouseEvent<HTMLButtonElement>) => {
		if (!textareaRef.current) return;

		const idElement = (e.target as HTMLImageElement).id;

		if (idElement === "bold") {
			if (textareaRef.current.style.fontWeight.length) {
				textareaRef.current.style.fontWeight = "";
			} else {
				textareaRef.current.style.fontWeight = "bold";
			}

			return;
		}

		if (idElement === "underline") {
			if (textareaRef.current.style.textDecoration.length) {
				textareaRef.current.style.textDecoration = "";
			} else {
				textareaRef.current.style.textDecoration = "underline";
			}

			return;
		}

		if (idElement === "italic") {
			if (textareaRef.current.style.fontStyle.length) {
				textareaRef.current.style.fontStyle = "";
			} else {
				textareaRef.current.style.fontStyle = "italic";
			}
			return;
		}
	};

	const handlerAlign = (e: MouseEvent<HTMLButtonElement>) => {
		if (!textareaRef.current) return;

		const idElement = (e.target as HTMLImageElement).id;

		if (idElement) {
			if (textareaRef.current.style.textAlign.length) {
				textareaRef.current.style.textAlign = "";
			} else {
				textareaRef.current.style.textAlign = idElement;
			}

			return;
		}
	};

	const handlerTextTransform = () => {
		if (!textareaRef.current) return;

		setStyles((prev) => ({ ...prev, uppercase: !prev.uppercase }));

		if (textTransformValue) {
			if (textareaRef.current.style.textTransform.length) {
				textareaRef.current.style.textTransform = "";
			} else {
				textareaRef.current.style.textTransform = "uppercase";
			}

			return;
		}
	};

	const handlerColor = (e: MouseEvent<HTMLButtonElement>) => {
		if (!textareaRef.current) return;

		setStyles((prev) => ({ ...prev, color: e.target.value }));

		if (textareaRef.current.style.color.length) {
			textareaRef.current.style.color = "";
		} else {
			textareaRef.current.style.color = `${styles.color}`;
		}
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
