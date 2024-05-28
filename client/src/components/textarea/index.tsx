import alignCenter from "@/assets/icons/align-center.svg";
import alignLeft from "@/assets/icons/align-left.svg";
import alignRight from "@/assets/icons/align-right.svg";
import bold from "@/assets/icons/bold.svg";
import italic from "@/assets/icons/italic.svg";
import underline from "@/assets/icons/underline.svg";
import { useTextarea } from "@/hooks";
import type { FC } from "react";

//icones.js.org/

export const Textarea: FC = () => {
	const {
		textareaRef,
		styles,
		handlerSize,
		handlerFontWeight,
		handlerAlign,
		handlerTextTransform,
		handlerColor,
	} = useTextarea();

	return (
		<div className="w-full h-80">
			<div className="w-auto h-auto flex border my-5">
				<input
					onChange={handlerSize}
					type="number"
					className="pl-5 pr-1 border-r-2"
					value={styles.size}
					min="10"
					max="64"
				/>
				<button
					type="button"
					className="p-2 border-r-2"
					onClick={handlerFontWeight}
				>
					<img id="bold" src={bold} alt="Icon Font Bold" />
				</button>
				<button
					type="button"
					className="p-2 border-r-2"
					onClick={handlerFontWeight}
				>
					<img id="underline" src={underline} alt="Icon Font Underline" />
				</button>
				<button
					type="button"
					className="p-2 border-r-2"
					onClick={handlerFontWeight}
				>
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
					value={styles.color}
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
