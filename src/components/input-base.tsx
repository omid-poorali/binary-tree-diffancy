import React from 'react';
import clsx from 'clsx';
import { useControlled } from 'hooks';

type CustomProps = {
  fullWidth?: boolean;
  className?: string;
  color?: 'primary';
  variant?: 'outlined';
  size?: 'medium';
  disabled?: boolean;
};

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<'input'>, keyof CustomProps>;

export const InputBase = React.forwardRef((props: PropsType, forwardedRef: React.Ref<HTMLInputElement>) => {
  const {
    fullWidth = false,
    className,
    color = 'primary',
    variant = 'outlined',
    size = 'medium',
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

  const inputClassName = clsx(
    'DuiInputBase',
    `DuiInputBase--${color}-${variant}`,
    `DuiInputBase--${size}`,
    {
      'DuiInputBase--fullWidth': fullWidth,
      'DuiInputBase--disabled': disabled,
    },
    className,
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
    onChange?.(event);
  };

  return (
    <input
      ref={forwardedRef}
      className={inputClassName}
      disabled={disabled}
      value={value ?? ''}
      onChange={handleChange}
      {...rest}
    />
  );
});
