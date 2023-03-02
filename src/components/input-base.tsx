import React from 'react';
// import classnames from 'clsx';
import { useControlled } from 'hooks';

type CustomProps = {
	fullWidth?: boolean;
	className?: string;
	disabled?: boolean;
};

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<'input'>, keyof CustomProps>

export const InputBase = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLInputElement>) => {
	const {
		// fullWidth = false,
		className,
		disabled = false,
		value: propValue,
		defaultValue,
		onChange,
		...rest
	} = props;

	const [value, setValue] = useControlled<PropsType['value']>({
		controlled: propValue,
		default: defaultValue,
	});

	// const inputClassName = classnames('puiInputBase',
	// 	`puiInputBase--${color}-${variant}`,
	// 	`puiInputBase--${size}`,
	// 	{
	// 		'puiInputBase--ltr': ltr && value,
	// 		'puiInputBase--fullWidth': fullWidth,
	// 		'puiInputBase--disabled': disabled,
	// 	},
	// 	className);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setValue(value);
		onChange?.(event);
	};

	return (
		<input
			ref={forwardedRef}
			disabled={disabled}
			value={value ?? ""}
			onChange={handleChange}
			{...rest} />
	);
});