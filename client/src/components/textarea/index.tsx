import alignCenter from "@/assets/icons/align-center.svg";
import alignLeft from "@/assets/icons/align-left.svg";
import alignRight from "@/assets/icons/align-right.svg";
import bold from "@/assets/icons/bold.svg";
import italic from "@/assets/icons/italic.svg";
import underline from "@/assets/icons/underline.svg";
import {
	type ChangeEvent,
	type FC,
	type MouseEvent,
	useRef,
	useState,
} from "react";
//icones.js.org/
export const Textarea: FC = () => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);
	const [numberValue, setNumberValue] = useState("14");
	const [textTransformValue, setTextTransformValue] = useState(false);
	const [colorValue, setColorValue] = useState("#000000");

	const handlerNumberValue = (e: ChangeEvent<HTMLInputElement>) => {
		setNumberValue(e.target.value);
	};

	const handlerFont = (e: MouseEvent<HTMLButtonElement>) => {
		const idElement = (e.target as HTMLImageElement).id;

		if (!textareaRef.current) return;

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
		const idElement = (e.target as HTMLImageElement).id;

		if (!textareaRef.current) return;

		if (idElement) {
			if (textareaRef.current.style.textAlign.length) {
				textareaRef.current.style.textAlign = "";
			} else {
				textareaRef.current.style.textAlign = `${idElement}`;
			}

			return;
		}
	};

	const handlerTextTransform = () => {
		if (!textareaRef.current) return;

		setTextTransformValue((prev) => !prev);

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
		setColorValue(e.target.value);

		if (!textareaRef.current) return;

		if (textareaRef.current.style.color.length) {
			textareaRef.current.style.color = "";
		} else {
			textareaRef.current.style.color = `${colorValue}`;
		}
	};

	return (
		<div className="w-full h-80">
			<div className="w-auto h-auto flex border my-5">
				<input
					onChange={handlerNumberValue}
					type="number"
					className="pl-5 pr-1 border-r-2"
					value={numberValue}
					min="10"
					max="64"
				/>
				<button type="button" className="p-2 border-r-2" onClick={handlerFont}>
					<img id="bold" src={bold} alt="Icon Font Bold" />
				</button>
				<button type="button" className="p-2 border-r-2" onClick={handlerFont}>
					<img id="underline" src={underline} alt="Icon Font Underline" />
				</button>
				<button type="button" className="p-2 border-r-2" onClick={handlerFont}>
					<img id="italic" src={italic} alt="Icon Font Italic" />
				</button>
				<button type="button" className="p-2 border-r-2" onClick={handlerAlign}>
					<img id="left" src={alignLeft} alt="Icon Align Left" />
				</button>
				<button type="button" className="p-2 border-r-2" onClick={handlerAlign}>
					<img id="center" src={alignCenter} alt="Icon Align Center" />
				</button>
				<button type="button" className="p-2 border-r-2" onClick={handlerAlign}>
					<img id="right" src={alignRight} alt="Icon Align Right" />
				</button>
				<button
					type="button"
					className="p-2 w-16 border-r-2"
					onClick={handlerTextTransform}
				>
					aA
				</button>
				<button
					type="button"
					className="p-2 w-16 border-r-2 flex flex-col justify-center items-center"
					onChange={handlerColor}
					value={colorValue}
				>
					<span className="-mb-1">A</span>
					<input type="color" className="h-3.5 border-none outline-none" />
				</button>
			</div>
			<textarea
				ref={textareaRef}
				className="border w-full h-full p-5"
				placeholder="Your text here"
			/>
		</div>
	);
};
