import React from "react";
import { WrappedFieldProps } from "redux-form";

interface RenderInputProps extends WrappedFieldProps {
	label: string;
	type: string
}

const RenderInput: React.FC<RenderInputProps> = ({
	input: { onFocus, onBlur, value, ...input },
	label,
	type,
	meta: { touched, error }
}) => {
	const [passwordState, setPasswordState] = React.useState<boolean>(false);
	const [isFocus, setIsFocus] = React.useState<boolean>(false)
	return (
		<>
			<div className={`input ${value !== "" || isFocus ? "active" : ""} ${touched && error ? "error" : ""}`}>
				<span className='input__label'>{label}</span>

				<input
					{...input}
					type={passwordState ? "text" : type}
					className='input__field'
					onFocus={(e) => {
						setIsFocus(true)
						onFocus(e)
					}}
					onBlur={(e) => {
						setIsFocus(false)
						onBlur(e)
					}}
				/>

				{type === "password" ? (
					<div className="input-state" onClick={() => setPasswordState(!passwordState)}>
						{passwordState ? (
							<span className="input-state__text">Hide</span>
						) : (
							<span className="input-state__text">Show</span>
						)}
					</div>
				) : null}
			</div>

			{touched && error && <span className="input__error">{error}</span>}
		</>
	);
};

export default RenderInput;