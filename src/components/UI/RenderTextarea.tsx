// import React from "react";
// import { WrappedFieldProps } from "redux-form";

// interface RenderTextareaProps extends WrappedFieldProps {
// 	name: string;
// 	label: string;
// 	bgWhite?: boolean;
// }

// const RenderTextarea: React.FC<RenderTextareaProps> = ({
// 	label,
// 	input,
// 	meta: { touched, error },
// 	bgWhite
// }) => {
// 	return (
// 		<div className={`textarea ${bgWhite ? "bgWhite" : ""}`}>
// 			<textarea
// 				{...input}
// 				className="textarea__field"
// 				placeholder={label}
// 			/>
// 		</div>
// 	);
// };

// export default RenderTextarea;

import React from "react";
import { WrappedFieldProps } from "redux-form";

interface RenderTextareaProps extends WrappedFieldProps {
	label: string;
	type: string
}

const RenderTextarea: React.FC<RenderTextareaProps> = ({
	input: { onFocus, onBlur, value, ...input },
	label,
	meta: { touched, error }
}) => {
	const [isFocus, setIsFocus] = React.useState<boolean>(false)

	return (
		<>
			<div className={`textarea ${value !== "" || isFocus ? "active" : ""} ${touched && error ? "error" : ""}`}>
				<span className='textarea__label'>{label}</span>

				<textarea
					{...input}
					className='textarea__field'
					onFocus={(e) => {
						setIsFocus(true)
						onFocus(e)
					}}
					onBlur={(e) => {
						setIsFocus(false)
						onBlur(e)
					}}
				/>
			</div>
		</>
	);
};

export default RenderTextarea;